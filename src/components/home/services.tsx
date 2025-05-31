import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Marquee from "../ui/marquee";

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
    <section id="services" className="bg-green-500">
      <div className="mt-12">
        <Link href="/#call">
          <Marquee
            items={[
              { type: "text", content: "🔥 Skyrocket your views!" },
              // { type: "image", content: "/logos/devfest.png" },
              { type: "text", content: "🚀 Click here to book a call" },
              // { type: "image", content: "/logos/openai.png" },
            ]}
            direction="left"
            speed={60}
          />
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 mt-12">Services</Badge>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a wide range of services to help grow your channel. Whether
            you need just one or multiple, we&apos;ve got you covered!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-2 border-black bg-card overflow-hidden hover:bg-primary hover:shadow-md hover:text-white transition-all duration-300"
            >
              <CardContent className="flex gap-4 p-6">
                <div className="shrink-0 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
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

      <div className="mt-12">
        <Link href="/#call">
          <Marquee
            items={[
              { type: "text", content: "🔥 Skyrocket your views!" },
              // { type: "image", content: "/logos/devfest.png" },
              { type: "text", content: "🚀 Click here to book a call" },
              // { type: "image", content: "/logos/openai.png" },
            ]}
            direction="left"
            speed={60}
          />
        </Link>
      </div>
    </section>
  );
};

export default Services;
