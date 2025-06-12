"use client";
import AdsMarquee from "../ui/ad-marquee";
import { Badge } from "../ui/badge";
import { motion, backOut, easeOut } from "motion/react";

export default function Results() {
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
      <AdsMarquee />
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 mt-12">Our Results</Badge>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, ease: backOut },
              },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-4xl md:text-5xl font-[900] mb-2">
              5<span className="text-primary">+</span>
            </h3>
            <p className="text-muted-foreground">Years in the industry</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, ease: backOut },
              },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-4xl md:text-5xl font-[900] mb-2">
              13M<span className="text-primary">+</span>
            </h3>
            <p className="text-muted-foreground">Subscribers gained</p>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.7, ease: backOut },
              },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-4xl md:text-5xl font-[900] mb-2">
              100M<span className="text-primary">+</span>
            </h3>
            <p className="text-muted-foreground">Views generated</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
