import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { Icon } from "@/components/ui/Icon";
import { LazyImage } from "@/components/ui/LazyImage";
import { useAsync } from "@/hooks/useAsync";
import { fetchTestimonials } from "@/api/courses";
import { images } from "@/config/images";

const avatarPhotos = [images.avatar1, images.avatar2, images.avatar3];

export function Testimonials() {
  const { data, loading } = useAsync(fetchTestimonials, []);

  return (
    <Section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyber-500/15 blur-[80px]" />
      <div className="absolute inset-0 bg-grid-slate opacity-[0.04] [background-size:44px_44px]" />

      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100">
            <Icon name="star" className="h-4 w-4 text-accent-400" />
            Learner stories
          </span>
          <h2 className="section-title mt-4 text-white">
            Loved by <span className="text-gradient">thousands</span> of learners
          </h2>
          <p className="mt-3 text-brand-200">
            Real career transformations from people who took the leap — and landed where they wanted to be.
          </p>
        </div>

        {loading ? (
          <Spinner label="Loading testimonials…" />
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05}>
                <figure className="glass group flex h-full flex-col rounded-3xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center gap-1.5 text-accent-400">
                    {[...Array(5)].map((_, si) => (
                      <Icon key={si} name="star" className="h-4 w-4 fill-accent-400" />
                    ))}
                  </div>
                  <Icon name="quote" className="mt-4 h-8 w-8 text-brand-400/60" />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-50">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    {avatarPhotos[i % avatarPhotos.length] ? (
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/20">
                        <LazyImage
                          src={avatarPhotos[i % avatarPhotos.length]}
                          alt={t.name}
                          aspect="aspect-square"
                          className="h-12 w-12"
                        />
                      </div>
                    ) : (
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: t.avatarColor }}
                      >
                        {t.name.charAt(0)}
                      </span>
                    )}
                    <div>
                      <span className="block text-sm font-semibold text-white">{t.name}</span>
                      <span className="block text-xs text-brand-200">{t.role}</span>
                    </div>
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
