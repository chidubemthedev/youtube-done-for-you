"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AdsMarquee from "../ui/ad-marquee";
import { Badge } from "../ui/badge";
import { motion, backOut, anticipate, easeOut } from "motion/react";

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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = [
  {
    hidden: { opacity: 0, y: 40, rotate: -3 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  },
  {
    hidden: { opacity: 0, scale: 0.8, x: -40 },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: backOut },
    },
  },
  {
    hidden: { opacity: 0, y: 40, scale: 1.1 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: anticipate },
    },
  },
  {
    hidden: { opacity: 0, x: 40, rotate: 3 },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  },
  {
    hidden: { opacity: 0, scale: 0.8, y: -40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: backOut },
    },
  },
  {
    hidden: { opacity: 0, x: -40, scale: 1.1 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: anticipate },
    },
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <AdsMarquee />
      <div className="container mx-auto px-4 md:px-[100px]">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 mt-12">Services</Badge>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We offer a wide range of services to help grow your channel. Whether
            you need just one or multiple, we&apos;ve got you covered!
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants[index % cardVariants.length]}
              whileHover={{
                scale: 1.04,
                rotate: 1,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              }}
              whileTap={{ scale: 0.98, rotate: -1 }}
            >
              <Card className="group border-2 border-black bg-card overflow-hidden hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_6px_0_0_#000000] hover:shadow-[0_0_0_0_#000000] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AdsMarquee />
    </motion.section>
  );
};

export default Services;
