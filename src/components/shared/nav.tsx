"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Testimonials", href: "/" },
  { name: "Our Work", href: "/#our-work" },
  { name: "Pricing", href: "/#pricing" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur px-[16px] md:px-[100px]">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image
              src="https://ext.same-assets.com/452876233/2066604167.png"
              alt="YTVideos.io"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#call" className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-md">
              Book a Call
            </Button>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/#call" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-md">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
