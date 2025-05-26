import Benefits from "@/components/home/benefits";
import CaseStudies from "@/components/home/case-studies";
import Hero from "@/components/home/hero";
import OurWork from "@/components/home/our-work";
import Results from "@/components/home/results";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurWork />
      <Benefits />
      <CaseStudies />
      <Results />
    </>
  );
}
