"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
];

export default function OurWork() {
  return (
    <section id="our-work" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="bg-primary text-white py-1 px-3 inline-block rounded mb-2">
            <span className="text-xs uppercase font-medium tracking-wider">
              Our Work
            </span>
          </div>
          <h2 className="section-title mb-6">Some of Our Work</h2>
          <p className="section-subtitle">
            Take a look at some of our premium quality thumbnail designs and
            videos weve made for our clients!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg group"
            >
              <Image
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                width={400}
                height={225}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View Larger</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://drive.google.com/drive/u/7/folders/1Ct-2HogGOi3Bt1TtTXGnBF3bfTNDdLak"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-foreground hover:bg-muted transition-colors border border-border/80 rounded-md px-6 py-3 font-medium"
          >
            See More Works
          </a>

          <Link
            href="/#call"
            className="group relative inline-flex items-center"
          >
            <div className="bg-primary text-white text-xs px-3 py-1 rounded-r absolute left-0 -translate-y-1/2 top-1/2">
              <span className="text-[10px] uppercase font-medium tracking-wide">
                Click here to book a call
              </span>
            </div>
            <Button className="btn-primary pl-32 pr-6">
              Skyrocket your views!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
