import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/config/images";

export function CTA() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src={images.cta}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-800/70" />
            <div className="relative px-8 py-16 text-center text-white sm:px-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Icon name="rocket" className="h-4 w-4 text-accent-400" />
                Start today
              </span>
              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                Ready to advance your career?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-brand-100">
                Speak with an advisor to find the program that matches your goals
                — and take the first step toward your next role.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink to="/courses" variant="accent">
                  Browse Courses
                  <Icon name="arrow" className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink to="/contact" variant="outline" className="btn-ghost-light">
                  Enquire Now
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
