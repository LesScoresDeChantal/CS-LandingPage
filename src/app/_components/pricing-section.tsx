"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

const plans: Plan[] = [
  {
    name: "Essential",
    period: "/month",
    description: "For investors getting serious.",
    features: [
      "Detailed rating of the best scored crypto 2x/day",
      "3 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice 30x/month",
    ],
    cta: "Start Free (14 days)",
    highlighted: false,
    monthlyPrice: 29,
    yearlyPrice: 29,
  },
  {
    name: "PRO",
    period: "/month",
    description: "For active investors.",
    badge: "Most popular",
    features: [
      "Detailed rating of the best scored crypto 2x/day",
      "12 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice 200x/month",
    ],
    cta: "Start Free (14 days)",
    highlighted: true,
    monthlyPrice: 99,
    yearlyPrice: 99,
  },
  {
    name: "Ultimate",
    period: "/month",
    description: "For serious portfolios.",
    features: [
      "Detailed rating of best scored crypto 2x/day",
      "12 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice unlimited",
    ],
    cta: "Start now",
    highlighted: false,
    monthlyPrice: 299,
    yearlyPrice: 299,
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Plans and Pricing
          </h2>
          <p className="text-lg text-gray-400">
            Receive unlimited credits when you pay yearly, and save on your
            plan.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="inline-flex items-center gap-1 bg-[#1e1e32] rounded-full p-1.5 border border-gray-800/50">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-7 py-2.5 rounded-full font-medium transition-all duration-300 ${
                !isYearly
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-7 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isYearly
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Yearly
            </button>
          </div>
          {!isYearly && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 text-xs font-semibold border border-gray-700">
              Save 35%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all overflow-hidden ${
                plan.highlighted
                  ? "border-2 border-[#0666c6] shadow-2xl shadow-[#0666c6]/10 bg-black"
                  : "border border-gray-800/80 bg-black"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_top_left,rgba(6,102,198,0.2)_10%,rgba(6,102,198,0.1)_30%,transparent_70%)] pointer-events-none" />
              )}
              {/* Header with Badge */}
              <div className="relative flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                {plan.badge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0666c6] text-white text-xs font-semibold">
                    ⭐ {plan.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="relative mb-8">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-white transition-all duration-500 ease-out">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Per month</p>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="relative space-y-3.5 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-gray-700/50 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className="relative w-full rounded-xl font-semibold transition-all bg-white hover:bg-gray-100 text-black py-6">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Pay in crypto?{" "}
            <a
              href="mailto:contact@cryptoscores.com"
              className="text-[#05b5fb] hover:underline"
            >
              contact@cryptoscores.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
