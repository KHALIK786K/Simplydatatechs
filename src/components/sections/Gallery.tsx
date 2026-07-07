import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LazyImage } from "@/components/ui/LazyImage";
import { images } from "@/config/images";

const captions = [
  "Collaborative learning spaces",
  "Hands-on coding labs",
  "Live mentor sessions",
  "Cohort study groups",
  "Real-world analytics projects",
  "Industry infrastructure",
  "Career coaching workshops",
  "Graduation celebrations",
];

// Varied grid sizes for visual interest
const sizes: string[] = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
];

export function Gallery() {
  return (
    <Section className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 rounded-full bg-brand-100/50 blur-[80px]" />
      <SectionHeading
        eyebrow="Inside the experience"
        title={<>Learning that feels like the <span className="text-gradient">real thing</span></>}
        description="Practical, project-driven, and community-powered. Here's a glimpse into what your learning journey looks like from day one."
      />
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {images.gallery.map((src, i) => (
          <Reveal key={src} delay={(i % 4) * 0.04} className={sizes[i]}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 shadow-soft sm:rounded-3xl">
              <LazyImage
                src={src}
                alt={captions[i]}
                aspect={i === 0 ? "aspect-square" : "aspect-[4/3]"}
                className="h-full"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{captions[i]}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
