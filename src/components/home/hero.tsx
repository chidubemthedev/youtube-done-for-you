import Link from "next/link";
import { Button } from "@/components/ui/button";
import Marquee from "../ui/marquee";
import Hero1 from "@/assets/images/hero-1.webp";
import Hero2 from "@/assets/images/hero-2.webp";
import Hero3 from "@/assets/images/hero-3.webp";
import Hero4 from "@/assets/images/hero-4.webp";
import Hero5 from "@/assets/images/hero-5.webp";
import Hero6 from "@/assets/images/hero-6.webp";
import Hero7 from "@/assets/images/hero-7.webp";
import Hero8 from "@/assets/images/hero-8.webp";
import Hero9 from "@/assets/images/hero-9.webp";
import Hero10 from "@/assets/images/hero-10.webp";
import Hero11 from "@/assets/images/hero-11.webp";
import Hero12 from "@/assets/images/hero-12.avif";
import Hero13 from "@/assets/images/hero-13.avif";
import Hero14 from "@/assets/images/hero-14.avif";
import Hero15 from "@/assets/images/hero-15.avif";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Red background section above hero */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

      <div className="container text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          We&apos;ll Help You Grow Your YT Automation Channel!
        </h1>

        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Completely automate your YouTube channel without relying on
          freelancers. Get access to top talent editors, voice actors, and more!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/#call">
            <Button
              className="btn-primary py-6 px-8 text-base"
              variant="threeD"
            >
              Book a Call
            </Button>
          </Link>

          <Link href="/#our-work">
            <Button variant="threeDYellow" className="py-6 px-8 text-base">
              See Our Work
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-2xl capitalize font-[900] mb-8">
            Trusted By More Than <span className="text-primary">300</span>+
            Channels
          </p>

          <Marquee
            items={[
              { type: "image", content: Hero1 },
              { type: "image", content: Hero2 },
              { type: "image", content: Hero3 },
              { type: "image", content: Hero4 },
              { type: "image", content: Hero5 },
              { type: "image", content: Hero6 },
              { type: "image", content: Hero7 },
            ]}
            speed={50}
            direction="left"
          />
          <Marquee
            items={[
              { type: "image", content: Hero8 },
              { type: "image", content: Hero9 },
              { type: "image", content: Hero10 },
              { type: "image", content: Hero11 },
              { type: "image", content: Hero12 },
              { type: "image", content: Hero13 },
              { type: "image", content: Hero14 },
              { type: "image", content: Hero15 },
            ]}
            speed={50}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
