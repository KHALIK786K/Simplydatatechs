import { useParams, Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { Spinner } from "@/components/ui/Spinner";
import { LeadForm } from "@/components/sections/LeadForm";
import { useAsync } from "@/hooks/useAsync";
import { fetchCourseBySlug, fetchCourses } from "@/api/courses";
import { formatInr, formatCompact } from "@/utils/format";

export function CourseDetailPage() {
  const { slug = "" } = useParams();
  const { data: course, loading } = useAsync(
    () => fetchCourseBySlug(slug),
    [slug]
  );
  const { data: allCourses } = useAsync(fetchCourses, []);

  if (loading) {
    return (
      <Section>
        <Spinner label="Loading course…" />
      </Section>
    );
  }

  if (!course) {
    return (
      <Section>
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white py-16 text-center">
          <h1 className="text-xl font-bold text-slate-900">Course not found</h1>
          <p className="mt-2 text-slate-600">
            The program you’re looking for doesn’t exist.
          </p>
          <Link to="/courses" className="btn btn-primary mt-6">
            Back to courses
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Header band */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="container py-14">
          <nav className="text-sm text-brand-200">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/courses" className="hover:text-white">
              Courses
            </Link>{" "}
            / <span className="text-white">{course.title}</span>
          </nav>
          <span className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
            {course.category} · {course.level}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-3 max-w-2xl text-brand-100">{course.summary}</p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <span>⏱ {course.durationMonths} months</span>
            <span>💻 {course.mode}</span>
            <span>★ {course.rating} rating</span>
            <span>👥 {formatCompact(course.learners)} learners</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">
              What you’ll learn
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span className="mt-0.5 text-brand-600">✓</span>
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-bold text-slate-900">Syllabus</h2>
            <div className="mt-4 space-y-4">
              {course.syllabus.map((mod, i) => (
                <div
                  key={mod.module}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">
                    {i + 1}. {mod.module}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {mod.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-3xl font-extrabold text-slate-900">
                  {formatInr(course.priceInr)}
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  Flexible payment options available
                </p>
              </div>
              <LeadForm
                courses={allCourses ?? [course]}
                defaultCourseSlug={course.slug}
                compact
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
