import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const awards: { icon: IconName; title: string; body: string }[] = [
  { icon: "star", title: "Top 10 EdTech Platform", body: "Recognised by three independent review bodies for learner outcomes and curriculum quality." },
  { icon: "shield", title: "ISO 27001 Certified", body: "Enterprise-grade data security and privacy compliance across all student systems." },
  { icon: "check", title: "AWS Training Partner", body: "Official AWS authorised training partner for cloud certification preparation." },
  { icon: "sparkle", title: "NASSCOM Recognised", body: "Featured in NASSCOM's emerging edtech innovators report for two consecutive years." },
];

const bigStats = [
  { value: 50000, suffix: "+", label: "Learners trained", icon: "users" as IconName },
  { value: 200, suffix: "+", label: "Hiring partners", icon: "rocket" as IconName },
  { value: 40, suffix: "+", label: "Programs offered", icon: "layers" as IconName },
  { value: 4, suffix: ".6★", label: "Average rating", icon: "star" as IconName },
  { value: 92, suffix: "%", label: "Completion rate", icon: "chart" as IconName },
  { value: 15, suffix: "+", label: "Countries reached", icon: "cloud" as IconName },
];

export function Achievements() {
  return (
    <Section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-100/40 blur-[100px]" />
      <SectionHeading
        eyebrow="Recognition & impact"
        title={<>Numbers that speak for <span className="text-gradient">themselves</span></>}
        description="Industry recognition, certifications, and outcomes that reflect our commitment to quality."
      />

      {/* Big stat counters */}
      <div className="relative mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {bigStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.04}>
            <div className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div className="mt-3 text-2xl font-extrabold text-gradient">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-slate-500">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Award cards */}
      <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-glow-accent">
                <Icon name={a.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-bold text-slate-900">{a.title}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
