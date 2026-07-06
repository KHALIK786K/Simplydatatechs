import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { Icon } from "@/components/ui/Icon";
import { useAsync } from "@/hooks/useAsync";
import { fetchTestimonials } from "@/api/courses";

export function Testimonials() {
  const { data, loading } = useAsync(fetchTestimonials, []);

  return (
    <Section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
            Learner stories
          </span>
          <h2 className="section-title mt-4 text-white">
            Loved by thousands of learners
          </h2>
        </div>

        {loading ? (
          <Spinner label="Loading testimonials…" />
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {data?.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.06}>
                <figure className="glass h-full rounded-3xl p-7 shadow-card">
                  <Icon name="quote" className="h-8 w-8 text-accent-400" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-brand-50">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {t.name}
                      </span>
                      <span className="block text-xs text-brand-200">
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
