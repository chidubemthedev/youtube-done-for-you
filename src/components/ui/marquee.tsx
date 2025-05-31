"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState, useEffect } from "react";

type MarqueeItem = {
  type: "text" | "image";
  content: string | StaticImageData;
};

type MarqueeProps = {
  items: MarqueeItem[];
  direction?: "left" | "right";
  speed?: number; // pixels per second
  backgroundColor?: string; // optional background color
  textColor?: string; // optional text color
};

export default function Marquee({
  items,
  direction = "left",
  speed = 50,
  backgroundColor = "bg-white", // default background color
  textColor = "text-gray-700", // default text color
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  const duplicatedItems = [...items, ...items, ...items, ...items]; // duplicate for seamless loop

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, [items]);

  const animationSpeed = marqueeWidth / speed;

  const animation = {
    x:
      direction === "left"
        ? ["0%", `-${marqueeWidth}px`]
        : [`-${marqueeWidth}px`, "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: animationSpeed,
      },
    },
  };

  return (
    <div
      className={`overflow-hidden whitespace-nowrap w-full py-3 relative ${
        isHovered ? "cursor-pointer" : ""
      } ${backgroundColor} ${textColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={marqueeRef}
        className="flex gap-8 items-center w-max"
        animate={!isHovered ? animation : undefined}
      >
        {duplicatedItems.map((item, idx) =>
          item.type === "text" ? (
            <span key={idx} className="text-lg font-medium">
              {item.content.toString()}
            </span>
          ) : (
            <div key={idx} className="w-12 h-12 relative">
              <Image
                src={item.content}
                alt="Marquee Image"
                fill
                className="object-contain rounded-full"
              />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}
