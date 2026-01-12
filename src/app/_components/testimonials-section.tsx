'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'Before CryptoScores, I had to jump between multiple websites to evaluate a project. Now everything I need is in one place.',
    category: 'Efficiency',
  },
  {
    quote:
      "I don't have hours to spend on research. With this tool, I can invest intelligently in under an hour per week.",
    category: 'Time Saving',
  },
  {
    quote:
      'I no longer feel overwhelmed by scattered data and contradictory information. The scores help me see what actually matters.',
    category: 'Clarity',
  },
  {
    quote:
      "I've integrated the scores into my daily investing routine. It's become my entry point whenever I hear about a new crypto.",
    category: 'Daily Use',
  },
  {
    quote:
      'Even with a large amount of data, the interface stays clear and structured. It helps me reason about projects logically without feeling lost in information.',
    category: 'User Experience',
  },
  {
    quote:
      'I used to waste hours researching projects that were not worth it. CryptoScores helps me filter quickly and focus only on relevant ones.',
    category: 'Filtering',
  },
  {
    quote:
      'I appreciate how the scores confirm or challenge my own analysis. It helps me avoid emotional decisions and stay disciplined.',
    category: 'Decision Making',
  },
  {
    quote:
      'The Dynamic Total Score is always the first thing I look at. It instantly tells me if a project deserves deeper analysis or not.',
    category: 'Quick Assessment',
  },
  {
    quote:
      'What makes the scores valuable to me is how they combine fundamentals, on-chain data, and ecosystem context in one clear overview.',
    category: 'Comprehensive Data',
  },
  {
    quote:
      'I was surprised by how smooth the experience is. The design makes complex information feel digestible, which encourages regular use.',
    category: 'Design',
  },
  {
    quote:
      "The Opportunity score and whale data helped me rebalance my portfolio with much more confidence. It's a real decision-making tool, not just numbers.",
    category: 'Portfolio Management',
  },
  {
    quote:
      'I use the scores every time before a potential buy. In a few minutes, I get a clear view of the project fundamentals, opportunity, TVL, and community. It saves me an incredible amount of time.',
    category: 'Due Diligence',
  },
  {
    quote:
      "The combination of fundamentals, on-chain data, and market context makes this tool extremely powerful. It's hard to go back once you've used it.",
    category: 'Power User',
  },
  {
    quote:
      "It gives smaller investors access to the same kind of insights usually reserved for large portfolios. That's what makes it truly valuable.",
    category: 'Accessibility',
  },
  {
    quote:
      "The app is very intuitive. Even with deep data, everything feels accessible and easy to navigate. It's genuinely pleasant to use.",
    category: 'Intuitive',
  },
  {
    quote:
      "I don't second-guess myself as much anymore. The structured overview reduces emotional and impulsive decisions.",
    category: 'Confidence',
  },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Trusted by investors worldwide
          </h2>
          <p className="text-lg text-gray-400">
            Discover how CryptoScores transforms crypto research for our users.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="flex h-full flex-col border-gray-800 bg-gray-900/30 p-6 transition-all duration-300 hover:border-[#0666c6]/40 hover:bg-gray-900/50">
                    <Quote className="mb-4 size-8 text-[#0666c6]/60" />
                    <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-gray-300">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="border-t border-gray-800 pt-4">
                      <span className="inline-block rounded-full bg-[#0666c6]/10 px-3 py-1 text-xs font-medium text-[#0666c6]">
                        {testimonial.category}
                      </span>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Progress dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index * 3)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    Math.floor(current / 3) === index
                      ? 'w-8 bg-[#0666c6]'
                      : 'w-2 bg-gray-700 hover:bg-gray-600',
                  )}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
