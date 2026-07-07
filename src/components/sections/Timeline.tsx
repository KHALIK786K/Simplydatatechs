import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { site } from "@/config/site";

const milestones: { year: string; icon: IconName; title: string; body: string; stat?: { v: number; s: string } }[] = [
  { year: `${site.founded}`, icon: "bulb", title: "Founded", body: "Started with a single data science program and one mission: make outcomes, not content, the measure of success.", stat: { v: 1, s: " program" } },
  { year: "2020", icon: "play", title: "Went fully online", body: "Pivoted to a live-online model with weekend sessions, recorded lectures, and 24/7 mentor access on Slack." },
  { year: "2021", icon: "users", title: "10,000 learners", body: "Crossed our first ten thousand enrolments across data, cloud, and software tracks.", stat: { v: 10000, s: "+" } },
  { year: "2023", icon: "rocket", title: "Career services launched", body: "Introduced dedicated placement support, mock interviews, and onboarded 100+ hiring partners.", stat: { v: 100, s: "+" } },
  { year: "2024", icon: "star", title: "Industry recognition", body: "Named in the top 10 online ed-tech platforms by three independent review bodies." },
  { year: "2025", icon: "layers", title: "Global cohorts", body: "Expanded to live cohorts across time zones with 40+ programs and 200+ hiring partners.", stat: { v: 40, s: "+" } },
];

export function Timeline() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-100/50 blur-[80px]" />
      <SectionHeading
        eyebrow="Our journey"
        title={<>Milestones that <span className="text-gradient">shaped us</span></>}
        description="From a single program to a global platform — every step driven by learner outcomes."
        align="left"
      />
      <div className="relative mt-12">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400 via-violet-400 to-cyber-400 sm:left-1/2 sm:-translate-x-px" />

        <div className="space-y-8">
          {milestones.map((m, i) => {
            const isRight = i % 2 === 1;
            return (
              <Reveal key={m.year} direction={isRight ? "left" : "right"} delay={i * 0.06}>
                <div className={`relative flex items-start gap-6 sm:gap-0 ${isRight ? "sm:flex-row-reverse" : ""}`}>
                  {/* Dot */}
                  <span className="absolute left-[12px] top-2 z-10 flex h-4 w-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                    <span className="h-3.5 w-3.5 rounded-full bg-brand-600 ring-[5px] ring-brand-100" />
                  </span>

                  {/* Card */}
                  <div className={`ml-10 w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-card sm:ml-0 sm:w-[calc(50%-32px)] ${isRight ? "sm:mr-auto sm:ml-0" : "sm:ml-auto sm:mr-0"}`}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white">
                        <Icon name={m.icon} className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{m.year}</span>
                    </div>
                    <h3 className="mt-3 font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.body}</p>
                    {m.stat && (
                      <div className="mt-3 inline-flex items-center gap-1 rounded-xl bg-slate-50 px-3 py-1.5 text-sm font-extrabold text-brand-700">
                        <AnimatedCounter value={m.stat.v} suffix={m.stat.s} />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
