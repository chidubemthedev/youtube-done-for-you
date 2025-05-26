"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

export default function CTA() {
  return (
    <section id="call" className="bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4">Get started</Badge>

          <h2 className="section-title mb-6">
            Ready to Grow Your YouTube Automation Channel?
          </h2>
          <p className="section-subtitle">
            Choose one of our video packages or book a free call with us today!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#call">
            <Button className="btn-primary py-6 px-8 text-base w-full sm:w-auto">
              Book a Call
            </Button>
          </Link>

          <Link href="/#pricing">
            <Button
              variant="outline"
              className="py-6 px-8 text-base w-full sm:w-auto"
            >
              Choose a Package
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
