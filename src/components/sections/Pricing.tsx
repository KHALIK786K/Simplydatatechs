import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";

const tiers = [
  {
    name: "Certificate",
    price: "₹62,000",
    period: "one-time",
    tagline: "Focused, short-format upskilling.",
    features: [
      "8–10 month program",
      "Live + recorded sessions",
      "Guided projects",
      "Community access",
      "Completion certificate",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹95,000",
    period: "one-time",
    tagline: "Career-focused with placement support.",
    features: [
      "11–12 month program",
      "Everything in Certificate",
      "Capstone project",
      "1:1 mentor reviews",
      "Placement assistance",
      "Interview prep",
    ],
    cta: "Most popular",
    highlighted: true,
  },
  {
    name: "Degree",
    price: "₹1,65,000",
    period: "across the program",
    tagline: "Accredited, in-depth postgraduate track.",
    features: [
      "24-month program",
      "Everything in Professional",
      "Multiple electives",
      "Industry capstone",
      "Dedicated career coach",
      "Alumni network",
    ],
    cta: "Talk to advisor",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Simple pricing"
        title="Invest in an outcome, not just a course"
        description="Transparent program fees with flexible installment options. No hidden costs."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl border p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1",
                t.highlighted
                  ? "border-brand-300 bg-gradient-to-b from-brand-600 to-brand-800 text-white shadow-card"
                  : "border-slate-200 bg-white"
              )}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-slate-900">
                  Most popular
                </span>
              )}
              <h3
                className={cn(
                  "text-lg font-bold",
                  t.highlighted ? "text-white" : "text-slate-900"
                )}
              >
                {t.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  t.highlighted ? "text-brand-100" : "text-slate-500"
                )}
              >
                {t.tagline}
              </p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold">{t.price}</span>
                <span
                  className={cn(
                    "ml-1 text-sm",
                    t.highlighted ? "text-brand-100" : "text-slate-500"
                  )}
                >
                  {t.period}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Icon
                      name="check"
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        t.highlighted ? "text-accent-400" : "text-brand-600"
                      )}
                    />
                    <span className={t.highlighted ? "text-brand-50" : ""}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                to="/contact"
                variant={t.highlighted ? "accent" : "primary"}
                className="mt-7 w-full"
              >
                {t.cta}
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
