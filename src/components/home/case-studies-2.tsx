"use client";
import { Badge } from "../ui/badge";
import Achievement1 from "@/assets/images/achievement-1.avif";
import Achievement2 from "@/assets/images/achievement-2.avif";
import Achievement3 from "@/assets/images/achievement-3.avif";
import Achievement4 from "@/assets/images/achievement-4.avif";
import Achievement5 from "@/assets/images/achievement-5.avif";
import Achievement6 from "@/assets/images/achievement-6.avif";
import Achievement7 from "@/assets/images/achievement-7.avif";
import Achievement8 from "@/assets/images/achievement-8.avif";
import Achievement9 from "@/assets/images/achievement-9.avif";
import Achievement10 from "@/assets/images/achievement-10.avif";
import Achievement11 from "@/assets/images/achievement-11.avif";
import Image from "next/image";
import { motion, backOut, easeOut } from "motion/react";

const CaseStudy2 = () => {
  const achievements = [
    Achievement1,
    Achievement2,
    Achievement3,
    Achievement4,
    Achievement5,
    Achievement6,
    Achievement7,
    Achievement8,
    Achievement9,
    Achievement11,
    Achievement10,
  ];
  return (
    <motion.section
      className="text-white bg-gray-800 py-12"
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
          <Badge className="mb-4">Case Studies</Badge>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            viewport={{ once: true }}
          >
            Results we&apos;ve gotten for our clients
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            viewport={{ once: true }}
          >
            Read about the success we&apos;ve been able to generate for our
            clients!
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.7 + index * 0.04, ease: backOut },
                },
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Image
                src={achievement}
                alt={`Achievement ${index + 1}`}
                className="w-full rounded-2xl border-2 border-white"
                width={400}
                height={300}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.h1
          className="mt-8 text-center font-bold text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          viewport={{ once: true }}
        >
          We can keep going…
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default CaseStudy2;
