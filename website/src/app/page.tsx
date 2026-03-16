import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Industries from "@/components/sections/Industries";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <Industries />
      <CTABanner />
    </>
  );
}
