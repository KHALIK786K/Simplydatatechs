import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 50000, suffix: "+", label: "Learners enrolled" },
  { value: 40, suffix: "+", label: "Industry programs" },
  { value: 200, suffix: "+", label: "Hiring partners" },
  { value: 92, suffix: "%", label: "Completion rate" },
];

export function Stats() {
  return (
    <Section className="py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-100/60 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-gradient sm:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
