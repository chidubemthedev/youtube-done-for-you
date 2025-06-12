"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { motion, backOut, anticipate, easeOut } from "motion/react";

export default function CTA() {
  return (
    <section id="call" className="bg-background">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: backOut }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.13,
              },
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <Badge className="mb-8">Get started</Badge>
          </motion.div>

          <motion.h2
            className="section-title mb-6 max-w-[400px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: backOut }}
          >
            Ready to Grow Your YouTube Automation Channel?
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
          >
            Choose one of our video packages or book a free call with us today!
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.06,
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              ease: anticipate,
            }}
          >
            <Link href="/#call">
              <Button
                className="btn-primary py-6 px-8 text-base w-full sm:w-auto"
                variant="threeD"
              >
                Book a Call
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.06,
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              ease: anticipate,
            }}
          >
            <Link href="/#pricing">
              <Button
                variant="threeDYellow"
                className="py-6 px-8 text-base w-full sm:w-auto"
              >
                Choose a Package
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
