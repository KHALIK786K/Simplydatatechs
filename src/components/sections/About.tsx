import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LazyImage } from "@/components/ui/LazyImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { images } from "@/config/images";

const points: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "users",
    title: "Mentors from industry",
    body: "Learn from engineers, analysts, and leaders at top tech companies who do this work every day — not just academics.",
  },
  {
    icon: "layers",
    title: "Project-first curriculum",
    body: "Every module ends in something you build and ship — a real portfolio piece, not just another quiz score.",
  },
  {
    icon: "rocket",
    title: "Career outcomes",
    body: "Placement support, referrals to 200+ hiring partners, resume reviews, and mock interviews baked into the program.",
  },
  {
    icon: "shield",
    title: "Industry certifications",
    body: "Programs aligned to AWS, Azure, and Google Cloud certification tracks so you graduate with recognized credentials.",
  },
];

const miniStats = [
  { value: 6, suffix: "+", label: "Years of excellence" },
  { value: 50000, suffix: "+", label: "Learners trained" },
  { value: 92, suffix: "%", label: "Completion rate" },
];

export function About() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-violet-100/50 blur-[80px]" />
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Image column */}
        <Reveal direction="right">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-48 w-48 rounded-3xl bg-brand-100/70 blur-2xl" />
            <div className="perspective relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card [transform:rotateY(-5deg)_rotateX(2deg)]">
                <LazyImage
                  src={images.teamCollaboration}
                  alt="Collaborative team environment"
                  aspect="aspect-[5/4]"
                />
              </div>
            </div>

            {/* Floating stat card bottom-right */}
            <div className="glass-light absolute -bottom-6 -right-4 z-10 hidden rounded-2xl p-5 shadow-card sm:block">
              <p className="text-3xl font-extrabold text-gradient">
                <AnimatedCounter value={92} suffix="%" />
              </p>
              <p className="text-xs font-medium text-slate-600">Completion rate</p>
            </div>

            {/* Small image overlay top-right */}
            <div className="absolute -right-4 -top-4 z-10 hidden overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
              <LazyImage
                src={images.instructorTeaching}
                alt="Live instructor session"
                aspect="aspect-square"
                className="h-28 w-28"
              />
            </div>
          </div>
        </Reveal>

        {/* Content column */}
        <Reveal direction="left">
          <span className="eyebrow">Why choose us</span>
          <h2 className="section-title mt-4">
            An academy built around your{" "}
            <span className="text-gradient">outcome</span>
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            We obsess over one thing: helping you get the skills and the role you
            want. That means practitioner-led teaching, hands-on projects graded
            by industry experts, and career support that continues long after your
            final lecture.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="group flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Mini stats row */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {miniStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                <div className="text-xl font-extrabold text-gradient">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
