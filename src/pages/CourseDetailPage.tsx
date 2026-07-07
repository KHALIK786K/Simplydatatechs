import { useParams, Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { Icon } from "@/components/ui/Icon";
import { LazyImage } from "@/components/ui/LazyImage";
import { LeadForm } from "@/components/sections/LeadForm";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useAsync } from "@/hooks/useAsync";
import { fetchCourseBySlug, fetchCourses } from "@/api/courses";
import { formatInr, formatCompact } from "@/utils/format";
import { images } from "@/config/images";

const bannerMap: Record<string, string> = {
  "Data & AI": images.courseBannerDS,
  Management: images.courseBannerAI,
  Software: images.courseBannerDev,
  Marketing: images.courseBannerCloud,
};

export function CourseDetailPage() {
  const { slug = "" } = useParams();
  const { data: course, loading } = useAsync(() => fetchCourseBySlug(slug), [slug]);
  const { data: allCourses } = useAsync(fetchCourses, []);

  if (loading) return <Section><Spinner label="Loading course…" /></Section>;

  if (!course) {
    return (
      <Section>
        <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white py-16 text-center shadow-soft">
          <Icon name="layers" className="mx-auto h-12 w-12 text-slate-300" />
          <h1 className="mt-4 text-xl font-bold text-slate-900">Course not found</h1>
          <p className="mt-2 text-slate-600">The program you're looking for doesn't exist.</p>
          <Link to="/courses" className="btn btn-primary mt-6">Back to courses</Link>
        </div>
      </Section>
    );
  }

  const banner = bannerMap[course.category] ?? images.courseBannerDS;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-violet-600/40" />
        <div className="absolute inset-0 opacity-[0.08]">
          <img src={banner} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-grid-slate opacity-[0.04] [background-size:44px_44px]" />
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyber-500/25 blur-[80px]" />

        <div className="container relative py-14 sm:py-20">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-brand-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-white">Courses</Link>
              <span>/</span>
              <span className="text-white">{course.title}</span>
            </nav>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">{course.category}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">{course.level}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">{course.mode}</span>
            </div>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">{course.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-brand-100/90">{course.summary}</p>
            <div className="mt-8 flex flex-wrap gap-8 text-sm">
              {[
                { icon: "⏱", label: `${course.durationMonths} months` },
                { icon: "💻", label: course.mode },
                { icon: "★", label: `${course.rating} rating` },
                { icon: "👥", label: `${formatCompact(course.learners)} learners` },
              ].map((m) => (
                <span key={m.label} className="flex items-center gap-1.5">
                  <span>{m.icon}</span> {m.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <Reveal>
              <h2 className="text-xl font-bold text-slate-900">What you'll learn</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.highlights.map((h) => (
                  <div key={h} className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition-all hover:shadow-card hover:-translate-y-0.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-slate-700">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Image */}
            <Reveal className="mt-10">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
                <LazyImage src={banner} alt={course.title} aspect="aspect-[21/9]" />
              </div>
            </Reveal>

            {/* Syllabus */}
            <Reveal className="mt-10">
              <h2 className="text-xl font-bold text-slate-900">Curriculum</h2>
              <div className="mt-5 space-y-4">
                {course.syllabus.map((mod, i) => (
                  <div key={mod.module} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                    <h3 className="flex items-center gap-3 font-bold text-slate-900">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-extrabold text-white">{i + 1}</span>
                      {mod.module}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mod.topics.map((t) => (
                        <span key={t} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Stats row */}
            <Reveal className="mt-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { v: course.learners, s: "+", l: "Learners" },
                  { v: course.durationMonths, s: " mo", l: "Duration" },
                  { v: 200, s: "+", l: "Hiring partners" },
                  { v: 92, s: "%", l: "Completion" },
                ].map((st) => (
                  <div key={st.l} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                    <div className="text-xl font-extrabold text-gradient"><AnimatedCounter value={st.v} suffix={st.s} /></div>
                    <div className="mt-1 text-xs text-slate-500">{st.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Reveal direction="left">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="text-3xl font-extrabold text-slate-900">{formatInr(course.priceInr)}</div>
                  <p className="mt-1 text-sm text-slate-500">Flexible EMI options available</p>
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2 text-sm text-green-700">
                    <Icon name="check" className="h-4 w-4" /> 14-day refund guarantee
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <LeadForm courses={allCourses ?? [course]} defaultCourseSlug={course.slug} compact />
              </Reveal>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
