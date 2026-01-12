'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const screenshots = [
  {
    src: '/images/app-screenshots/screen-table.png',
    alt: 'CryptoScores platform - Data table view',
    url: 'app.cryptoscores.com/cryptos',
  },
  {
    src: '/images/app-screenshots/screen-detail.png',
    alt: 'CryptoScores platform - Detail view',
    url: 'app.cryptoscores.com/cryptos/aave',
  },
  {
    src: '/images/app-screenshots/screen-detail-scores.png',
    alt: 'CryptoScores platform - Scores detail view',
    url: 'app.cryptoscores.com/cryptos/aave',
  },
];

export function AppPreviewSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            A powerful platform built for{' '}
            <span className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-transparent">
              crypto analysis
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-400"
          >
            Access comprehensive data, advanced analytics, and real-time
            insights all in one place.
          </motion.p>
        </div>

        {/* Screenshot Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-16 sm:mt-20"
        >
          {/* Glow effect behind screenshot */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0666c6]/20 to-[#05b5fb]/20 blur-3xl" />

          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  {/* Browser-like frame */}
                  <div className="overflow-hidden rounded-xl bg-gray-900/50 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                    {/* Browser header */}
                    <div className="flex items-center gap-2 border-b border-white/10 bg-gray-900/80 px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="ml-3 flex-1 rounded bg-gray-800/50 px-3 py-1 text-xs text-gray-500">
                        {screenshot.url}
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="relative w-full">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={2784}
                        height={1278}
                        className="w-full"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom navigation buttons */}
            <CarouselPrevious className="left-4 h-10 w-10 border-gray-700 bg-gray-900/80 text-white backdrop-blur hover:bg-gray-800 hover:text-white sm:left-8" />
            <CarouselNext className="right-4 h-10 w-10 border-gray-700 bg-gray-900/80 text-white backdrop-blur hover:bg-gray-800 hover:text-white sm:right-8" />
          </Carousel>

          {/* Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current
                    ? 'w-8 bg-gradient-to-r from-[#0666c6] to-[#05b5fb]'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to screenshot ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
