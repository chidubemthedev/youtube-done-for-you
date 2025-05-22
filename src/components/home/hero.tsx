import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
            <Button className="btn-primary py-6 px-8 text-base">
              Book a Call
            </Button>
          </Link>

          <Link href="/#our-work">
            <Button variant="outline" className="py-6 px-8 text-base">
              See Our Work
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm uppercase font-medium text-muted-foreground mb-4">
            Trusted By More Than 300+ Channels
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            {Array.from({ length: 11 }).map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-muted rounded-full overflow-hidden"
                style={{ opacity: 0.9 - index * 0.05 }}
              >
                <Image
                  src={`https://ext.same-assets.com/452876233/${
                    2029021627 + index
                  }.jpeg`}
                  alt={`Channel ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
