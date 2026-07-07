import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { TechStack } from "@/components/sections/TechStack";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { Timeline } from "@/components/sections/Timeline";
import { Achievements } from "@/components/sections/Achievements";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";
import { CTA } from "@/components/sections/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Stats />
      <Services />
      <About />
      <Process />
      <FeaturedCourses />
      <TechStack />
      <Gallery />
      <Team />
      <Timeline />
      <Achievements />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CTA />
    </>
  );
}
