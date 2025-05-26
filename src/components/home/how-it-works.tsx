"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

const steps = [
  {
    number: 1,
    title: "Choose a Video Package",
    description:
      "After selecting a package from our pricing section or scheduling a call, you'll be connected with our team to share all the necessary details and specific requests for your video.",
    image:
      "https://framerusercontent.com/images/vXE5h1MttYYKwXm8N7AgkxxyCI.svg",
  },
  {
    number: 2,
    title: "Team Gets to Work",
    description:
      "After we get a good understanding of your channel and video needs, our team will start right away. Your video, including the thumbnail, will be ready in 60-72 hours tops.",
    image: "https://ext.same-assets.com/452876233/3924939920.png",
  },
  {
    number: 3,
    title: "Approval + Delivery",
    description:
      "After we finish your video, you can ask for any changes you want. We'll make sure you're completely happy with the final result before delivery!",
    image: "https://ext.same-assets.com/452876233/3206952602.png",
  },
  {
    number: 4,
    title: "Growth",
    description:
      "As we keep working together, everything becomes automated. We take care of all video production, you keep full ownership, and your channel can grow consistently.",
    image:
      "https://framerusercontent.com/images/cdE8NorkUG53q5yTFcudrE1CVFE.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">Process</Badge>
          <h2 className="section-title">How it Works</h2>
          <p className="section-subtitle">
            Go through a seamless process of scaling your own YouTube automation
            channel.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary font-bold rounded-full w-10 h-10 flex items-center justify-center">
                    #{step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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
      </div>
    </section>
  );
}
