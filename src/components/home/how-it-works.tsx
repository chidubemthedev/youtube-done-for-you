"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { ArrowBigDownDash } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Choose a Video Package",
    description:
      "After selecting a package from our pricing section or scheduling a call, you'll be connected with our team to share all the necessary details and specific requests for your video.",
    image:
      "https://framerusercontent.com/images/0gXAf7hegYw3u9DkmDbkHQ82YhM.png?scale-down-to=512",
  },
  {
    number: 2,
    title: "Team Gets to Work",
    description:
      "After we get a good understanding of your channel and video needs, our team will start right away. Your video, including the thumbnail, will be ready in 60-72 hours tops.",
    image: "https://ext.same-assets.com/452876233/3206952602.png",
  },
  {
    number: 3,
    title: "Approval + Delivery",
    description:
      "After we finish your video, you can ask for any changes you want. We'll make sure you're completely happy with the final result before delivery!",
    image: "https://ext.same-assets.com/452876233/3924939920.png",
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
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="mb-12 md:mb-16 col-span-1">
          <Badge className="mb-4">Process</Badge>
          <h2 className="section-title text-left">How it Works</h2>
          <p className="section-subtitle text-left">
            Go through a seamless process of scaling your own YouTube automation
            channel.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto col-span-2">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6">
              <div
                className={`flex flex-col border-2 border-black shadow-[0_6px_0_0_#000000] rounded-md gap-6 p-6`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="w-[200px] h-[200px] object-contain"
                />
                <div>
                  <div className="flex gap-2 items-center mb-4">
                    <span className="bg-primary/10 text-primary font-bold rounded-full w-10 h-10 flex items-center justify-center">
                      #{step.number}
                    </span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className="flex justify-center">
                  <ArrowBigDownDash className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
