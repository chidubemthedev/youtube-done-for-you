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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="section-title mb-6">Frequently asked questions</h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Link href="/#call">
            <Button className="py-6 px-8 text-base rounded-2xl w-full max-w-3xl mx-auto hover:bg-primary/90 transition-colors duration-300">
              Have a different question?
              <span className="text-xl">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
