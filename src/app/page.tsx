import Benefits from "@/components/home/benefits";
import CaseStudies from "@/components/home/case-studies";
import Contact from "@/components/home/contact";
import CTA from "@/components/home/cta";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import OurWork from "@/components/home/our-work";
import Pricing from "@/components/home/pricing";
import Results from "@/components/home/results";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurWork />
      <Benefits />
      <CaseStudies />
      <Results />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Contact />
      <FAQ />
      <CTA />
    </>
  );
}
