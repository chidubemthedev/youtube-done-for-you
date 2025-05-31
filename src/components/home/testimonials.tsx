"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import AdsMarquee from "../ui/ad-marquee";

const testimonials = [
  {
    quote:
      "You're one of the best channel coordinators I have worked with so far. I like how you're able to respond back and address the pain points quickly",
    author: "Akhil",
    stars: 5,
  },
  {
    quote:
      "Beautiful work, love the finished product. Looking forward to working with yall and seeing this project prosper together",
    author: "Charlie",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background">
      <AdsMarquee />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 mt-12">Testimonial</Badge>
          <h2 className="section-title">What Our Clients Say About Us</h2>
          <p className="section-subtitle">
            Hear what our clients have to say about working with us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-black bg-gradient-to-br from-background to-muted overflow-hidden transition-all duration-300 shadow-[0_6px_0_0_#000000] hover:shadow-[0_0_0_0_#000000] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.stars)].map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      fill="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5 text-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-sm italic">
                  -{testimonial.author}
                </p>
                <blockquote className="text-xl md:text-2xl font-medium">
                  {testimonial.quote}
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
