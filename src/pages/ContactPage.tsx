import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { LeadForm } from "@/components/sections/LeadForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { LazyImage } from "@/components/ui/LazyImage";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useCourses } from "@/hooks/useCourses";
import { site } from "@/config/site";
import { images } from "@/config/images";

const contactCards: { icon: IconName; title: string; value: string; href?: string }[] = [
  { icon: "mail", title: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: "phone", title: "Call us", value: site.phone },
  { icon: "pin", title: "Visit us", value: site.address },
];

export function ContactPage() {
  const { data, loading } = useCourses();

  return (
    <>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-violet-600/40 bg-animated" />
        <div className="absolute inset-0 bg-grid-slate opacity-[0.05] [background-size:44px_44px]" />
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyber-500/20 blur-[80px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-[80px]" />
        <div className="container relative py-16 sm:py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 backdrop-blur">
              <Icon name="mail" className="h-4 w-4 text-accent-400" /> Get in touch
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Talk to an <span className="text-gradient">advisor</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-brand-100/90">
              Have questions about programs, fees, eligibility, or career outcomes?
              Our team at {site.name} will help you find the perfect fit.
            </p>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left column */}
          <div className="lg:col-span-2">
            <Reveal>
              {/* Contact cards */}
              <div className="space-y-4">
                {contactCards.map((c) => (
                  <div key={c.title} className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{c.title}</h3>
                      {c.href ? (
                        <a href={c.href} className="text-sm text-brand-600 hover:underline">{c.value}</a>
                      ) : (
                        <p className="text-sm text-slate-600">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
                <LazyImage
                  src={images.contactOffice}
                  alt="Modern office environment"
                  aspect="aspect-[16/10]"
                />
              </div>

              {/* Mini stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { v: 24, s: "h", l: "Avg. response" },
                  { v: 200, s: "+", l: "Partners" },
                  { v: 92, s: "%", l: "Satisfaction" },
                ].map((st) => (
                  <div key={st.l} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <div className="text-lg font-extrabold text-gradient">
                      <AnimatedCounter value={st.v} suffix={st.s} />
                    </div>
                    <div className="mt-0.5 text-[10px] text-slate-500">{st.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              {loading ? <Spinner /> : <LeadForm courses={data} />}
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
