import AdsMarquee from "../ui/ad-marquee";
import { Badge } from "../ui/badge";

export default function Results() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <AdsMarquee />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 mt-12">Our Results</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-[900] mb-2">
              5<span className="text-primary">+</span>
            </h3>
            <p className="text-muted-foreground">Years in the industry</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-[900] mb-2">
              13M<span className="text-primary">+</span>
            </h3>
            <p className="text-muted-foreground">Subscribers gained</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-[900] mb-2">
              100M<span className="text-primary">+</span>
            </h3>
            <p className="text-muted-foreground">Views generated</p>
          </div>
        </div>
      </div>
    </section>
  );
}
