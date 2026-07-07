import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LazyImage } from "@/components/ui/LazyImage";
import { images } from "@/config/images";

const services: {
  icon: IconName;
  title: string;
  body: string;
  gradient: string;
  image: string;
  stats: string;
}[] = [
  {
    icon: "ai",
    title: "AI & Machine Learning",
    body: "From foundations to deep learning — build models that solve real problems, deploy them to production, and learn MLOps best practices.",
    gradient: "from-brand-500 to-violet-500",
    image: images.aiVisualization,
    stats: "12,400+ learners",
  },
  {
    icon: "chart",
    title: "Data Science & Analytics",
    body: "Master statistics, Python, SQL, and storytelling. Turn raw data into actionable decisions that employers actually value.",
    gradient: "from-cyber-500 to-brand-500",
    image: images.dataAnalytics,
    stats: "8,600+ learners",
  },
  {
    icon: "cloud",
    title: "Cloud Computing",
    body: "Design, deploy, and operate cloud-native systems on AWS, Azure, and GCP with reliability, security, and cost optimization.",
    gradient: "from-brand-400 to-cyber-500",
    image: images.cloudComputing,
    stats: "3,700+ learners",
  },
  {
    icon: "code",
    title: "Full-Stack Development",
    body: "Ship production-ready web apps end-to-end with React, Node.js, TypeScript, databases, CI/CD, and modern DevOps toolchains.",
    gradient: "from-violet-500 to-brand-600",
    image: images.softwareEngineering,
    stats: "5,300+ learners",
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    body: "Defend systems and data with hands-on labs in threat modeling, penetration testing, incident response, and compliance frameworks.",
    gradient: "from-accent-500 to-brand-500",
    image: images.cybersecurity,
    stats: "2,100+ learners",
  },
  {
    icon: "bulb",
    title: "Product & Management",
    body: "Lead teams and strategy with programs spanning business analytics, product management, operations, and executive leadership.",
    gradient: "from-brand-600 to-violet-600",
    image: images.modernDashboard,
    stats: "21,000+ learners",
  },
];

export function Services() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet-100/40 blur-[80px]" />
      <SectionHeading
        eyebrow="What we offer"
        title={<>Programs designed for <span className="text-gradient">real outcomes</span></>}
        description="Six focused tracks built with industry practitioners and aligned to what the market actually hires for. Each program includes live mentorship, hands-on projects, and career support."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <TiltCard className="group h-full">
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <LazyImage
                    src={s.image}
                    alt={s.title}
                    aspect="aspect-auto"
                    className="h-40"
                    imgClassName="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-700 backdrop-blur">
                    {s.stats}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 pt-2">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-glow -mt-8 relative z-10`}
                  >
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    Explore programs <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-brand-50 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
