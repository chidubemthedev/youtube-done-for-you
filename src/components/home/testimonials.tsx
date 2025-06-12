"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import AdsMarquee from "../ui/ad-marquee";
import { motion, backOut, easeOut } from "motion/react";

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
    <motion.section
      className="bg-background"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <AdsMarquee />
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 mt-12">Testimonial</Badge>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            viewport={{ once: true }}
          >
            What Our Clients Say About Us
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            viewport={{ once: true }}
          >
            Hear what our clients have to say about working with us!
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mb-12"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.7 + index * 0.05, ease: backOut },
                },
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Card className="border-2 border-black bg-gradient-to-br from-background to-muted overflow-hidden transition-all duration-300 shadow-[0_6px_0_0_#000000] hover:shadow-[0_0_0_0_#000000] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
