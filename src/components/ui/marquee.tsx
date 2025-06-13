"use client";

import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();

  const duplicatedItems = [...items, ...items, ...items, ...items]; // duplicate for seamless loop

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, [items]);

  const animationSpeed = marqueeWidth / speed;

  // Set initial x position for correct direction
  const initialX = direction === "left" ? 0 : -marqueeWidth;

  // Animation object for scrolling
  const scrollAnimation = {
    x: direction === "left" ? -marqueeWidth : 0,
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "linear" as const,
      duration: animationSpeed,
    },
  };

  useEffect(() => {
    if (marqueeWidth > 0) {
      controls.set({ x: initialX }); // Reset to initial position on width/direction change
      controls.start(scrollAnimation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marqueeWidth, direction, animationSpeed]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (marqueeWidth > 0) controls.start(scrollAnimation);
  };

  return (
    <div
      className={`overflow-hidden whitespace-nowrap w-full py-3 relative ${
        isHovered ? "cursor-pointer" : ""
      } ${backgroundColor} ${textColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={marqueeRef}
        className="flex gap-8 items-center w-max"
        initial={{ x: initialX }}
        animate={controls}
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
