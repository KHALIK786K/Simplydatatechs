import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LazyImage } from "@/components/ui/LazyImage";
import { Icon, type IconName } from "@/components/ui/Icon";
import { images } from "@/config/images";

const points: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "users",
    title: "Mentors from industry",
    body: "Learn from engineers, analysts, and leaders who do this work every day.",
  },
  {
    icon: "layers",
    title: "Project-first curriculum",
    body: "Every module ends in something you build — not just a quiz.",
  },
  {
    icon: "rocket",
    title: "Career outcomes",
    body: "Placement support, referrals, and interview prep baked into the program.",
  },
];

export function About() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="right">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-3xl bg-brand-100/70 blur-2xl" />
            <div className="perspective">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card [transform:rotateY(-6deg)_rotateX(2deg)]">
                <LazyImage
                  src={images.aboutTeam}
                  alt="A collaborative team learning together"
                  aspect="aspect-[5/4]"
                />
              </div>
            </div>
            <div className="glass-light absolute -bottom-6 -right-4 hidden rounded-2xl p-4 shadow-card sm:block">
              <p className="text-2xl font-extrabold text-brand-700">6+ yrs</p>
              <p className="text-xs text-slate-500">of learner success</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left">
          <span className="eyebrow">Why choose us</span>
          <h2 className="section-title mt-4">
            An academy built around your <span className="text-gradient">outcome</span>
          </h2>
          <p className="mt-4 text-slate-600">
            We obsess over one thing: helping you get the skills and the role you
            want. That means practitioner-led teaching, real projects, and
            support that doesn't stop at the final lecture.
          </p>
          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
