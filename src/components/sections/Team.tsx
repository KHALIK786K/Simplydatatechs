import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon } from "@/components/ui/Icon";

const team = [
  { name: "Arjun Mehta", role: "Chief Executive Officer", color: "#2f52f5", bio: "15+ years in edtech and enterprise SaaS. Previously VP Product at a Fortune 500 consultancy." },
  { name: "Sneha Kapoor", role: "Head of Curriculum", color: "#7c3aed", bio: "Ex-Google data scientist. Designed ML curricula adopted by three universities." },
  { name: "Vikram Rao", role: "VP Engineering", color: "#06b6d4", bio: "Full-stack architect and open-source contributor. Built platforms serving 1M+ users." },
  { name: "Priya Nair", role: "Director of Career Services", color: "#ff9a1f", bio: "Talent acquisition leader with a network spanning 200+ hiring partners across industries." },
  { name: "Rahul Sharma", role: "Lead Cloud Instructor", color: "#16a34a", bio: "AWS Solutions Architect and certified Kubernetes admin. 10+ years in cloud infrastructure." },
  { name: "Divya Joshi", role: "Head of Student Success", color: "#e11d48", bio: "Passionate about learner outcomes. Drove completion rates from 68% to 92% in two years." },
];

export function Team() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-100/50 blur-[80px]" />
      <SectionHeading
        eyebrow="Our people"
        title={<>Meet the team behind <span className="text-gradient">your success</span></>}
        description="Industry veterans, researchers, and educators united by one goal — helping you build a career you're proud of."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.05}>
            <TiltCard intensity={5} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold text-white shadow-soft"
                    style={{ backgroundColor: m.color }}
                  >
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{m.name}</h3>
                    <p className="text-sm text-brand-600">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{m.bio}</p>
                <div className="mt-4 flex gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                    <Icon name="mail" className="h-4 w-4" />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                    <Icon name="users" className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
