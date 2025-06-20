"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import AdsMarquee from "../ui/ad-marquee";
import { motion, backOut, easeOut } from "motion/react";

// Sample thumbnails URLs
const thumbnails = [
  "https://framerusercontent.com/images/3VmvA24XJi1Xt0n2V8vPRFwi4b0.jpg",
  "https://framerusercontent.com/images/aMAl0gZSYf9ppRT120wQvdEqc.jpg",
  "https://framerusercontent.com/images/Ee0KGHNQcuJBz0rPT27usL2hp5I.jpg",
  "https://framerusercontent.com/images/aePBtTN8QDqEtv2sl2dQOKYaIk.jpg",
  "https://framerusercontent.com/images/h4M3GmcgwEU91k0p8W0rEYKiNw.jpg",
  "https://framerusercontent.com/images/H74rIdT8DHYlIocot3MB4E7Fao.jpg",
  "https://framerusercontent.com/images/NMeB9xStwgJCE3aBtYVNQ0abVT8.jpg",
  "https://framerusercontent.com/images/xMnlzMOaSrM7e0WNmWikBlNicWE.jpg",
  "https://framerusercontent.com/images/77JOgUPUIyIgq3V77iDMCtWIe4.jpg",
  "https://framerusercontent.com/images/RC2SsS8Pie5P5JnSJREgApDWmq4.jpg",
  "https://framerusercontent.com/images/0MJVnmh7NJY1pJLuA77eAKowELk.jpg",
  "https://framerusercontent.com/images/aePBtTN8QDqEtv2sl2dQOKYaIk.jpg",
];

export default function OurWork() {
  return (
    <motion.section
      id="our-work"
      className="py-16 md:py-24 relative bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      <div className="container mx-auto px-4 border-2 border-black rounded-2xl bg-background">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 mt-12">Our Work</Badge>
          <motion.h2
            className="section-title mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            viewport={{ once: true }}
          >
            Some of Our Work
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            viewport={{ once: true }}
          >
            Take a look at some of our premium quality thumbnail designs and
            videos weve made for our clients!
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {thumbnails.map((thumbnail, index) => (
            <motion.div
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg group"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6 + (index % 3) * 0.1,
                    ease: backOut,
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Image
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                width={400}
                height={225}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium"></span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <AdsMarquee />
      </div>
    </motion.section>
  );
}
