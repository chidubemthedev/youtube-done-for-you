"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { name: "Services", href: "/#services" },
  { name: "Testimonials", href: "/" },
  { name: "Our Work", href: "/#our-work" },
  { name: "Pricing", href: "/#pricing" },
];

const Footer = () => {
  return (
    <footer className="text-gray-500 py-12 px-[16px] md:px-[100px]">
      <div className="flex items-center justify-center">
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Link href="/">
              <h1 className="font-[900] text-[20px] tracking-wide">
                YTDFY.com
              </h1>
            </Link>
          </div>

          <nav className="flex items-center justify-center gap-6 my-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Link
              href="https://www.instagram.com/ytvideos.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full bg-transparent border border-white/20 hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.youtube.com/@ytvideosio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full bg-transparent border border-white/20 hover:bg-white/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-sm">Our Parent Company:</p>
            <p className="text-sm">wealthwire@advery.digital</p>
            <p className="text-sm text-center">
              W E A L T H W I R E IT INFRASTRUCTURE CO. L.L.C
              <br />
              AL BUDOOR BLDG, Office no. 2F/18 Naif
              <br />
              Dubai, United Arab Emirates
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-sm">
            © 2024 YTVideos, Inc. All rights reserved.
          </div>
        </div>

        {/* <div className="mt-6 flex justify-center">
          <Link
            href="https://wa.link/om1vy5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://ext.same-assets.com/452876233/1944262297.svg"
              alt="WhatsApp"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
