"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion, backOut, anticipate, easeOut } from "motion/react";

const faqs = [
  {
    question: "How long does it take for an entire video to get made?",
    answer:
      "Our standard delivery time is 60-72 hours for a complete video including thumbnail. For more complex projects or rush orders, please contact us directly to discuss timeline options.",
  },
  {
    question:
      "Is there a trial period available to test the service before committing?",
    answer:
      "Yes, we offer a satisfaction guarantee on your first video. If you're not completely satisfied with the quality, we'll either revise it until you're happy or provide a full refund.",
  },
  {
    question:
      "Who owns the videos created through your automation services, and what is the liability in terms of compliance with YouTube policies?",
    answer:
      "You retain 100% ownership of all content we create for you. We ensure our content follows YouTube guidelines, but as the channel owner, you have final responsibility for what appears on your channel. We provide guidance on best practices to maintain compliance with platform policies.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
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
            <Badge className="mb-4">FAQ</Badge>
          </motion.div>
          <motion.h2
            className="section-title mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: backOut }}
          >
            Frequently asked questions
          </motion.h2>
        </motion.div>

        <motion.div
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
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: backOut,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <AccordionItem value={`item-${index}`} className="mb-4">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: backOut }}
          viewport={{ once: true, amount: 0.2 }}
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
            className="inline-block w-full max-w-3xl"
          >
            <Link href="/#call">
              <Button className="py-6 px-8 text-base rounded-2xl w-full max-w-3xl mx-auto hover:bg-primary/90 transition-colors duration-300">
                Have a different question?
                <span className="text-xl">→</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
