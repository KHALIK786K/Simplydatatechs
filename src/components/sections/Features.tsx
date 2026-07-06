import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "Live mentor sessions",
    body: "Weekly live classes with practitioners, plus recordings you can revisit anytime.",
    icon: "◎",
  },
  {
    title: "Project-based learning",
    body: "Apply concepts to real datasets and ship a portfolio-ready capstone.",
    icon: "▤",
  },
  {
    title: "Career support",
    body: "Resume reviews, mock interviews, and referrals to hiring partners.",
    icon: "➜",
  },
  {
    title: "Flexible schedule",
    body: "Designed for working professionals with evening and weekend options.",
    icon: "◷",
  },
];

export function Features() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Why learn with us</p>
        <h2 className="section-title mt-2">Built for outcomes, not just content</h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-700">
              {f.icon}
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
