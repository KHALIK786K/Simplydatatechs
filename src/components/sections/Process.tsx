import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Apply & get matched",
    body: "Tell us your goals in a quick call. We recommend the program that fits your background and ambitions.",
  },
  {
    n: "02",
    title: "Learn live & on-demand",
    body: "Attend expert-led live sessions, revisit recordings anytime, and get help from mentors when you're stuck.",
  },
  {
    n: "03",
    title: "Build real projects",
    body: "Apply every concept to hands-on projects and ship a portfolio-ready capstone reviewed by practitioners.",
  },
  {
    n: "04",
    title: "Get hired",
    body: "Polish your resume, practice interviews, and get referred to our network of 200+ hiring partners.",
  },
];

export function Process() {
  return (
    <Section className="relative overflow-hidden bg-slate-50">
      <SectionHeading
        eyebrow="How it works"
        title="A clear path from enrolled to employed"
        description="A structured journey with support at every step — no guesswork."
      />
      <div className="relative mt-14">
        {/* connecting line */}
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block" />
        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 text-lg font-extrabold text-white shadow-glow">
                  {s.n}
                </div>
                <h3 className="mt-5 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
