import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LazyImage } from "@/components/ui/LazyImage";
import { images } from "@/config/images";

const captions = [
  "Collaborative learning spaces",
  "Hands-on labs",
  "Live mentor sessions",
  "Cohort meetups",
  "Real-world analytics",
  "Industry infrastructure",
];

export function Gallery() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        eyebrow="Inside the experience"
        title="Learning that feels like the real thing"
        description="Practical, project-driven, and community-powered from day one."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.gallery.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 0.06}>
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
              <LazyImage
                src={src}
                alt={captions[i]}
                aspect="aspect-[4/3]"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {captions[i]}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
