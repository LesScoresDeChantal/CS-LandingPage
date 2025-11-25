"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <header
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-2xl pointer-events-auto ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        }}
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105"
          >
            <Image
              src="/images/cryptoScoresVector-02.svg"
              alt="CryptoScores"
              width={120}
              height={20}
              // className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              How it works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
            <a
              href="#categories"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* <Button
              variant="ghost"
              className="hidden md:inline-flex text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg px-4 py-2 transition-all"
            >
              Sign in
            </Button> */}
            <Button
              asChild
              className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] hover:from-[#0555a5] hover:to-[#0499da] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-[#0666c6]/25 hover:shadow-[#0666c6]/40 transition-all hover:scale-105"
            >
              <a href="#pricing">Try it for free</a>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
