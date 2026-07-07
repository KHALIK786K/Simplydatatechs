import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const categories = [
  {
    label: "Languages & Frameworks",
    items: ["Python", "Java", "JavaScript", "TypeScript", "React", "Node.js", "Spring Boot", "TensorFlow"],
    gradient: "from-brand-500 to-violet-500",
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
    gradient: "from-cyber-500 to-brand-500",
  },
  {
    label: "Data & AI",
    items: ["Pandas", "Spark", "PyTorch", "Scikit-Learn", "SQL", "MongoDB", "Tableau", "Power BI"],
    gradient: "from-violet-500 to-brand-600",
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "VS Code", "Jira", "Figma", "Postman", "Linux", "Kafka", "Redis"],
    gradient: "from-accent-500 to-brand-500",
  },
];

export function TechStack() {
  return (
    <Section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-600/25 blur-[80px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.04] [background-size:44px_44px]" />

      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
            Technology stack
          </span>
          <h2 className="section-title mt-4 text-white">
            Industry tools you'll <span className="text-gradient">master</span>
          </h2>
          <p className="mt-3 text-brand-200">
            Our curriculum covers the exact tools and platforms used by engineers, analysts, and architects at leading companies today.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.06}>
              <div className="glass rounded-3xl p-6 shadow-card">
                <div className={`inline-flex rounded-xl bg-gradient-to-r ${cat.gradient} px-3 py-1.5 text-xs font-bold text-white`}>
                  {cat.label}
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="group rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-brand-100 transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
