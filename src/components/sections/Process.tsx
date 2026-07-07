import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LazyImage } from "@/components/ui/LazyImage";
import { images } from "@/config/images";

const steps: { n: string; icon: IconName; title: string; body: string }[] = [
  {
    n: "01",
    icon: "users",
    title: "Apply & get matched",
    body: "Tell us your goals in a quick 15-minute call. Our advisors recommend the program that fits your background, career stage, and ambitions.",
  },
  {
    n: "02",
    icon: "play",
    title: "Learn live & on-demand",
    body: "Attend expert-led live sessions every weekend. Revisit HD recordings anytime. Get unstuck with mentor office hours and a dedicated Slack channel.",
  },
  {
    n: "03",
    icon: "code",
    title: "Build real projects",
    body: "Apply every concept to hands-on labs and real datasets. Ship a portfolio-ready capstone reviewed and scored by practising engineers.",
  },
  {
    n: "04",
    icon: "rocket",
    title: "Get hired",
    body: "Polish your resume with career coaches, practise interviews, and get referred to our network of 200+ hiring partners across industries.",
  },
];

export function Process() {
  return (
    <Section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-100/60 blur-[80px]" />
      <SectionHeading
        eyebrow="How it works"
        title={<>A clear path from <span className="text-gradient">enrolled to employed</span></>}
        description="A structured 4-step journey with support at every stage — no guesswork, no dead ends."
      />
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-brand-300 via-violet-300 to-cyber-300 hidden sm:block" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="group relative flex gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 text-sm font-extrabold text-white shadow-glow transition-transform group-hover:scale-110">
                    {s.n}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon name={s.icon} className="h-4 w-4 text-brand-500" />
                      <h3 className="font-bold text-slate-900">{s.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <Reveal direction="left">
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-3xl bg-violet-100/60 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
              <LazyImage
                src={images.studentsLearning}
                alt="Students in a collaborative learning session"
                aspect="aspect-[4/3]"
              />
            </div>
            <div className="glass-light absolute -bottom-5 -left-5 z-10 rounded-2xl p-4 shadow-card">
              <div className="flex items-center gap-2">
                <Icon name="check" className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm font-bold text-slate-900">4-step journey</p>
                  <p className="text-xs text-slate-500">Avg. 11 months to hired</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
