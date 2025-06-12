"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Benefit1 from "@/assets/images/benefit-1.avif";
import Benefit2 from "@/assets/images/benefit-2.avif";
import Benefit3 from "@/assets/images/benefit-3.avif";
import { motion, backOut, easeOut } from "motion/react";

const benefits = [
  {
    title: "Effortless YT Management",
    description:
      "Our team handles everything from start to finish. Just sit back and watch your channel grow with minimal effort on your part.",
    icon: Benefit1,
  },
  {
    title: "Extremely Fast Video Delivery Time",
    description:
      "Enjoy quick turnaround times on all your videos, ensuring your content schedule stays on track and consistent.",
    icon: Benefit2,
  },
  {
    title: "Access to Private Discord + Team",
    description:
      "Join our exclusive Discord community and collaborate directly with our expert team for personalized support and guidance.",
    icon: Benefit3,
  },
];

export default function Benefits() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 mt-12">Benefits</Badge>
          <motion.h2
            className="section-title mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            viewport={{ once: true }}
          >
            YT Automation easier than ever before
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            viewport={{ once: true }}
          >
            We simplify the process and make it effortless on your end!
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col border-2 border-black shadow-[0_6px_0_0_#000000] rounded-2xl p-6"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
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
              <div className="mb-6">
                <h3 className="text-4xl font-semibold mb-3 tracking-tighter">
                  {benefit.title}
                </h3>
                <div className="flex justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={400}
                    height={400}
                    className="h-[200px] w-[200px] object-contain"
                  />
                </div>
              </div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Link href="/#call">
            <Button
              variant={"threeD"}
              className="btn-primary py-6 px-8 text-base"
            >
              Book a Call
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
