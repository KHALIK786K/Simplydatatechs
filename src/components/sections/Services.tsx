import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon, type IconName } from "@/components/ui/Icon";

const services: {
  icon: IconName;
  title: string;
  body: string;
  gradient: string;
}[] = [
  {
    icon: "ai",
    title: "AI & Machine Learning",
    body: "From foundations to deep learning — build models that solve real problems and deploy them to production.",
    gradient: "from-brand-500 to-violet-500",
  },
  {
    icon: "chart",
    title: "Data & Analytics",
    body: "Turn raw data into decisions with statistics, visualization, and storytelling employers value.",
    gradient: "from-cyber-500 to-brand-500",
  },
  {
    icon: "cloud",
    title: "Cloud Computing",
    body: "Design, deploy, and operate cloud-native systems with reliability, security, and cost in mind.",
    gradient: "from-brand-400 to-cyber-500",
  },
  {
    icon: "code",
    title: "Software Engineering",
    body: "Ship full-stack applications end-to-end with a modern, industry-standard toolchain.",
    gradient: "from-violet-500 to-brand-600",
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    body: "Defend systems and data with hands-on labs in threat modeling, hardening, and response.",
    gradient: "from-accent-500 to-brand-500",
  },
  {
    icon: "bulb",
    title: "Product & Management",
    body: "Lead teams and strategy with programs spanning analytics, operations, and leadership.",
    gradient: "from-brand-600 to-violet-600",
  },
];

export function Services() {
  return (
    <Section className="relative">
      <SectionHeading
        eyebrow="What we offer"
        title={<>Programs designed for real outcomes</>}
        description="Six focused tracks, each built with practitioners and aligned to what the market actually hires for."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <TiltCard className="group h-full">
              <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-glow`}
                  style={{ transform: "translateZ(40px)" }}
                >
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <Icon name="arrow" className="h-4 w-4" />
                </span>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl transition-opacity group-hover:opacity-100" />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
