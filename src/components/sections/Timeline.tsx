import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

const milestones = [
  { year: `${site.founded}`, title: "Founded", body: "Started with a single data program and a big idea: outcomes over content." },
  { year: "2021", title: "10,000 learners", body: "Crossed our first ten thousand enrolments across data and software tracks." },
  { year: "2023", title: "Career services", body: "Launched dedicated placement support and onboarded 100+ hiring partners." },
  { year: "2025", title: "Global cohorts", body: "Expanded to live cohorts across time zones with 40+ programs." },
];

export function Timeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our journey"
        title="Milestones that shaped us"
        align="left"
      />
      <div className="relative mt-12 border-l-2 border-slate-200 pl-8">
        {milestones.map((m, i) => (
          <Reveal key={m.year} direction="left" delay={i * 0.06}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-brand-600 ring-4 ring-brand-100" />
              </span>
              <div className="text-sm font-bold text-brand-600">{m.year}</div>
              <h3 className="mt-1 text-lg font-bold text-slate-900">{m.title}</h3>
              <p className="mt-1 max-w-xl text-sm text-slate-600">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
