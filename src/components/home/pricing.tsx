"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import AdsMarquee from "../ui/ad-marquee";
import { motion, backOut, anticipate, easeOut } from "motion/react";

const pricingPlans = [
  {
    name: "Standard",
    price: "$29",
    period: "/video",
    description: "Ideal for beginners",
    features: [
      "4-5 Minute Video",
      "800 words standard script",
      "Single choice human voice over",
      "Basic editing with 20% SFX compared to diamond videos",
      "Single revision",
      "High-quality thumbnail",
    ],
    icon: "https://ext.same-assets.com/452876233/1431015901.svg",
    link: "https://buy.stripe.com/3cscNqdddbxt1b28xE",
  },
  {
    name: "Premium",
    price: "$55",
    period: "/video",
    description: "Perfect for channels ready to step up their content game",
    features: [
      "8-10 minute video",
      "1600 word script",
      "Multiple options for human voice overs",
      "Premium editing with 50% VFX Compared to Diamond VIdeos",
      "2 revisions",
      "High Quality Thumbnail + 2 revisions",
    ],
    popular: true,
    icon: "https://ext.same-assets.com/452876233/3012566760.svg",
    link: "https://buy.stripe.com/4gwdRua118lhdXO4hn",
  },
  {
    name: "Diamond",
    price: "$110",
    period: "/video",
    description: "Tailored for swift expansion",
    features: [
      "8-10 Minute Video",
      "1600 words top tier script",
      "Multiple human voice over choices",
      "Top tier editing with comprehensive VFX and graphics",
      "4 revisions",
      "High CTR Thumbnail with 2 revisions + variations",
    ],
    icon: "https://ext.same-assets.com/452876233/3694274498.svg",
    link: "https://buy.stripe.com/9AQ8xa8WX8lh6vmdRZ",
  },
];

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: backOut }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <AdsMarquee />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: backOut }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: anticipate }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 mt-12">Pricing</Badge>
          </motion.div>
          <motion.h2
            className="section-title mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: backOut }}
            viewport={{ once: true }}
          >
            Choose One of Our Packages
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: backOut }}
            viewport={{ once: true }}
          >
            Discover which package is just right for you!
          </motion.p>
        </motion.div>

        <div className="mt-0">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                  delayChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: backOut },
                  },
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                  mass: 0.7,
                }}
                style={{ height: "100%" }}
              >
                <Card
                  className={`border-2 border-black overflow-hidden flex flex-col h-fit transition-all duration-300 shadow-[0_6px_0_0_#000000] hover:shadow-[0_0_0_0_#000000] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none ${
                    plan.popular ? "relative" : ""
                  }`}
                >
                  {plan.popular && (
                    <motion.div
                      className="bg-primary text-white py-2 px-4 ml-6 text-xs uppercase font-medium tracking-wider w-fit rounded-sm"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
                      viewport={{ once: true }}
                    >
                      Most Popular
                    </motion.div>
                  )}

                  <CardHeader className="pb-0">
                    <CardTitle className="flex flex-col  gap-4">
                      <span className="text-2xl font-bold">{plan.name}</span>
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground pb-1">
                          {plan.period}
                        </span>
                      </div>
                    </CardTitle>
                    <CardDescription className="pt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="py-6 flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1 + i * 0.07,
                            ease: anticipate,
                          }}
                          viewport={{ once: true }}
                        >
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3 pt-0">
                    <motion.a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center py-2.5 rounded-md font-medium ${
                        plan.popular
                          ? "bg-primary text-white"
                          : "border border-primary/80 text-primary"
                      }`}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.10)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        mass: 0.7,
                      }}
                    >
                      Choose Package
                    </motion.a>
                    <Link
                      href="/#call"
                      className="text-center text-sm text-muted-foreground hover:underline"
                    >
                      Or book a call
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
