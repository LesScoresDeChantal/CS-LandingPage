'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const maskStyle = {
    mask: 'radial-gradient(ellipse 50% 50% at 50% 45%, #000 60%, transparent 100%)',
    WebkitMask:
      'radial-gradient(ellipse 50% 50% at 50% 45%, #000 60%, transparent 100%)',
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Enhanced grid background with circular mask */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)]"
        style={{
          backgroundSize: '64px 64px',
          ...maskStyle,
        }}
      />

      {/* Mouse follow spotlight effect - only visible where grid is visible */}
      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-300"
        style={{
          background: isMobile
            ? `radial-gradient(circle 800px at 50% 40%, rgba(6, 102, 198, 0.2), transparent 50%)`
            : `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 102, 198, 0.2), transparent 50%)`,
          ...maskStyle,
        }}
      >
        {isMobile && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background: `radial-gradient(circle 600px at 50% 60%, rgba(5, 181, 251, 0.15), transparent 50%)`,
              animationDuration: '4s',
            }}
          />
        )}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-[#0666c6]/20 bg-[#0666c6]/10 px-4 py-2">
            <span className="text-sm font-medium text-[#05b5fb]">
              7,000+ cryptocurrencies analyzed daily
            </span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-transparent">
              Save hours
            </span>
            <span className="text-white">
              {' '}
              researching crypto fundamentals.
            </span>
          </h1>

          <p className="mx-auto mb-4 max-w-3xl text-xl font-semibold text-white sm:text-2xl">
            Spot opportunities. Avoid traps.
          </p>

          <p className="mx-auto mb-2 max-w-3xl text-lg text-gray-300">
            CryptoScores shows you the real quality of{' '}
            <span className="font-semibold text-white">
              7,000+ cryptocurrencies
            </span>
            , updated daily…
          </p>

          <p className="mx-auto mb-10 max-w-3xl text-lg font-semibold text-white">
            directly inside Telegram.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb] px-10 py-7 text-lg text-white shadow-lg shadow-[#0666c6]/20 transition-all hover:from-[#0555a5] hover:to-[#0499da]"
            >
              <a href="#pricing">
                Start Free - Get Your First Scores Now
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#05b5fb]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#05b5fb]" />
              <span>Mobile & Desktop friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#05b5fb]" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Stats preview */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8">
            {[
              { value: '7,000+', label: 'Cryptos analyzed' },
              { value: '100+', label: 'Metrics Analyzed & Scored' },
              { value: '24/7', label: 'Real-time updates' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
