import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";

// Original wordmark-style placeholders (no third-party logos/trademarks).
const partners = [
  "NimbusCloud",
  "DataForge",
  "QuantEdge",
  "ByteWorks",
  "Corelytics",
  "Novastack",
  "HelixAI",
  "Meridian",
];

export function LogoCloud() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-10">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by teams at forward-thinking companies
        </p>
      </Container>
      <Marquee>
        {partners.map((name) => (
          <span
            key={name}
            className="text-xl font-bold tracking-tight text-slate-400/80"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
