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
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">Pricing</Badge>
          <h2 className="section-title mb-6">Choose One of Our Packages</h2>
          <p className="section-subtitle">
            Discover which package is just right for you!
          </p>
        </div>

        <div className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 border-black overflow-hidden flex flex-col h-fit transition-all duration-300 shadow-[0_6px_0_0_#000000] hover:shadow-[0_0_0_0_#000000] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none ${
                  plan.popular ? "relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white py-2 px-4 ml-6 text-xs uppercase font-medium tracking-wider w-fit rounded-sm">
                    Most Popular
                  </div>
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
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pt-0">
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-2.5 rounded-md font-medium ${
                      plan.popular
                        ? "bg-primary text-white"
                        : "border border-primary/80 text-primary"
                    }`}
                  >
                    Choose Package
                  </a>
                  <Link
                    href="/#call"
                    className="text-center text-sm text-muted-foreground hover:underline"
                  >
                    Or book a call
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
