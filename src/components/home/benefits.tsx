"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Effortless YT Management",
    description:
      "Our team handles everything from start to finish. Just sit back and watch your channel grow with minimal effort on your part.",
    icon: "https://ext.same-assets.com/452876233/1509545232.png",
  },
  {
    title: "Extremely Fast Video Delivery Time",
    description:
      "Enjoy quick turnaround times on all your videos, ensuring your content schedule stays on track and consistent.",
    icon: "https://ext.same-assets.com/452876233/1962855497.png",
  },
  {
    title: "Access to Private Discord + Team",
    description:
      "Join our exclusive Discord community and collaborate directly with our expert team for personalized support and guidance.",
    icon: "https://ext.same-assets.com/452876233/2373779568.png",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-primary text-white py-1 px-3 inline-block rounded mb-2">
            <span className="text-xs uppercase font-medium tracking-wider">
              Benefits
            </span>
          </div>
          <h2 className="section-title mb-6">
            YT Automation easier than ever before
          </h2>
          <p className="section-subtitle">
            We simplify the process and make it effortless on your end!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-6">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/#call">
            <Button className="btn-primary py-6 px-8 text-base">
              Book a Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
