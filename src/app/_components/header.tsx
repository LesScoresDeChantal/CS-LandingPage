"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            {/* Logo complet sur desktop */}
            <Image
              src="/images/cryptoScoresVector-02.svg"
              alt="CryptoScores"
              width={120}
              height={20}
              priority
              className="hidden sm:block"
            />
            {/* Icône sur mobile */}
            <Image
              src="/images/crypto-scores-icon.svg"
              alt="CryptoScores"
              width={40}
              height={40}
              priority
              className="block sm:hidden"
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
            <a
              href="https://cryptoscores.gitbook.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Hamburger menu button - visible sur mobile et tablette */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* CTA Button - toujours visible */}
            <Button
              asChild
              className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] hover:from-[#0555a5] hover:to-[#0499da] text-white font-semibold px-4 sm:px-6 py-2.5 rounded-lg shadow-lg shadow-[#0666c6]/25 hover:shadow-[#0666c6]/40 transition-all hover:scale-105 text-sm"
            >
              <a href="#pricing">Try it for free</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 py-4 space-y-4 border-t border-gray-800/50">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              How it works
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              FAQ
            </a>
            <a
              href="https://cryptoscores.gitbook.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
            >
              Docs
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
