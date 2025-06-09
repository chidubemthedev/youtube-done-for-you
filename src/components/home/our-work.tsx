"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import AdsMarquee from "../ui/ad-marquee";

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
    <section
      id="our-work"
      className="py-16 md:py-24 relative bg-gradient-to-br from-blue-900 via-blue-500 to-blue-200"
    >
      <div className="container mx-auto px-4 border-2 border-black rounded-2xl bg-background">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 mt-12">Our Work</Badge>
          <h2 className="section-title mb-6">Some of Our Work</h2>
          <p className="section-subtitle">
            Take a look at some of our premium quality thumbnail designs and
            videos weve made for our clients!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
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
                <span className="text-white font-medium"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <AdsMarquee />
      </div>
    </section>
  );
}
