"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Déclare le type pour le Twitter pixel et Google Analytics
declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    twq?: (
      command: string,
      eventId: string,
      params?: { value?: string | null },
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLaunchAppClick = () => {
    if (typeof window !== "undefined" && window.twq) {
      window.twq("event", "tw-qfuhj-r0jj9");
    }
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17532441676/q8S0CIeJpuIbEMyoj6hB",
      });
    }
    window.open("https://app.cryptoscores.com/cryptos", "_blank");
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <header
        className="pointer-events-auto mx-auto max-w-6xl rounded-2xl bg-black/40 shadow-2xl backdrop-blur-xl transition-all duration-500"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className="flex h-16 items-center justify-between px-6">
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
              priority
            />
          </Link>

          {/* Navigation - Centered */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            <a
              href="#categories"
              className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Features
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
            <a
              href="#pricing"
              className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
            <a
              href="#faq"
              className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
            <a
              href="https://cryptoscores.gitbook.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Docs
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Hamburger menu button - visible sur mobile et tablette */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 transition-colors hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Launch App Button - masqué sur mobile */}
            <Button
              onClick={handleLaunchAppClick}
              variant="outline"
              className="hidden text-foreground text-sm font-semibold transition-all sm:inline-flex"
            >
              Launch App
            </Button>

            {/* CTA Button - masqué sur mobile, visible sur desktop */}
            <Button
              asChild
              className="hidden rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0666c6]/25 transition-all hover:scale-105 hover:from-[#0555a5] hover:to-[#0499da] hover:shadow-[#0666c6]/40 sm:px-6 lg:inline-flex"
            >
              <a href="#pricing">Try it for free</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="space-y-4 border-t border-gray-800/50 px-6 py-4">
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              FAQ
            </a>
            <a
              href="https://cryptoscores.gitbook.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Docs
            </a>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3 border-t border-gray-800/50 pt-4">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLaunchAppClick();
                }}
                variant="outline"
                className="w-full  text-sm font-semibold transition-all "
              >
                Launch App
              </Button>
              <Button
                asChild
                className="w-full rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb] text-sm font-semibold text-white shadow-lg shadow-[#0666c6]/25 transition-all hover:from-[#0555a5] hover:to-[#0499da] hover:shadow-[#0666c6]/40"
              >
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                  Try it for free
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
