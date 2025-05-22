import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "YouTube Automation",
    description:
      "Streamline and scale your YouTube channel effortlessly with our comprehensive automation services. We handle everything from content creation to publishing.",
    icon: "https://ext.same-assets.com/452876233/1342353933.svg",
  },
  {
    title: "Video Editing",
    description:
      "Enhance your videos with high-quality editing that will grab + retain viewer attention. All edits, cuts, and transitions are done with the highest quality!",
    icon: "https://ext.same-assets.com/452876233/3807175722.svg",
  },
  {
    title: "Voice Overs",
    description:
      "Bring your videos to life with engaging and professional voice overs, tailored to match your channel's style and tone.",
    icon: "https://ext.same-assets.com/452876233/2345679642.svg",
  },
  {
    title: "Script Writing",
    description:
      "We'll craft compelling scripts that keep your viewers hooked from start to finish, with content that's both informative and entertaining.",
    icon: "https://ext.same-assets.com/452876233/2490875155.svg",
  },
  {
    title: "Thumbnail Design",
    description:
      "Attract more clicks with premium eye-catching thumbnails designed to stand out in the crowded YouTube landscape, boosting your video's visibility.",
    icon: "https://ext.same-assets.com/452876233/345005928.svg",
  },
  {
    title: "SEO",
    description:
      "Reach new audiences & grow organically with strategic SEO that increases your video ranking & channel visibility.",
    icon: "https://ext.same-assets.com/452876233/1838383171.svg",
  },
];
const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a wide range of services to help grow your channel. Whether
            you need just one or multiple, we&apos;ve got you covered!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-card overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#call"
            className="group relative inline-flex items-center"
          >
            <div className="bg-primary text-white text-xs px-3 py-1 rounded-r absolute left-0 -translate-y-1/2 top-1/2">
              <span className="text-[10px] uppercase font-medium tracking-wide">
                Click here to book a call
              </span>
            </div>
            <Button className="btn-primary pl-32 pr-6">
              Skyrocket your views!
            </Button>
          </Link>
        </div>

        {/* Red separator */}
        <div className="mt-24 relative">
          <Image
            src="https://ext.same-assets.com/452876233/1528811474.svg"
            alt="Divider"
            width={1400}
            height={40}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
