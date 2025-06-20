"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Marquee from "../ui/marquee";
import Hero1 from "@/assets/images/hero-1.webp";
import Hero2 from "@/assets/images/hero-2.webp";
import Hero3 from "@/assets/images/hero-3.webp";
import Hero4 from "@/assets/images/hero-4.webp";
import Hero5 from "@/assets/images/hero-5.webp";
import Hero6 from "@/assets/images/hero-6.webp";
import Hero7 from "@/assets/images/hero-7.webp";
import Hero8 from "@/assets/images/hero-8.webp";
import Hero9 from "@/assets/images/hero-9.webp";
import Hero10 from "@/assets/images/hero-10.webp";
import Hero11 from "@/assets/images/hero-11.webp";
import Hero12 from "@/assets/images/hero-12.avif";
import Hero13 from "@/assets/images/hero-13.avif";
import Hero14 from "@/assets/images/hero-14.avif";
import Hero15 from "@/assets/images/hero-15.avif";
import { motion, backOut, anticipate, easeOut } from "motion/react";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Red background section above hero */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

      <motion.div
        className="container text-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: backOut }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
        >
          We&apos;ll Help You Grow Your YT Automation Channel!
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          viewport={{ once: true }}
        >
          Completely automate your YouTube channel without relying on
          freelancers. Get access to top talent editors, voice actors, and more!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.13,
                delayChildren: 0.3,
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
                className="btn-primary py-6 px-8 text-base"
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
            <Link href="/#our-work">
              <Button variant="threeDYellow" className="py-6 px-8 text-base">
                See Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: backOut }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.p
          className="text-2xl capitalize font-[900] mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: backOut }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Trusted By More Than <span className="text-primary">300</span>+
          Channels
        </motion.p>

        <Marquee
          items={[
            { type: "image", content: Hero1 },
            { type: "image", content: Hero2 },
            { type: "image", content: Hero3 },
            { type: "image", content: Hero4 },
            { type: "image", content: Hero5 },
            { type: "image", content: Hero6 },
            { type: "image", content: Hero7 },
          ]}
          speed={50}
          direction="left"
        />
        <Marquee
          items={[
            { type: "image", content: Hero8 },
            { type: "image", content: Hero9 },
            { type: "image", content: Hero10 },
            { type: "image", content: Hero11 },
            { type: "image", content: Hero12 },
            { type: "image", content: Hero13 },
            { type: "image", content: Hero14 },
            { type: "image", content: Hero15 },
          ]}
          speed={50}
          direction="right"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
