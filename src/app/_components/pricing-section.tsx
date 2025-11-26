"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface PricePlan {
  price: number;
  totalYearly: number;
  url: string;
  comparisonPrice?: number;
}

interface Plan {
  name: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
  monthly: PricePlan;
  yearly: PricePlan;
}

const YEARLY_DISCOUNT: number = 0.3;

const ESSENTIAL_MONTHLY_PRICE: number = 29;
const ESSENTIAL_MONTHLY_YEARLY_PRICE: number =
  ESSENTIAL_MONTHLY_PRICE * (1 - YEARLY_DISCOUNT);

const PRO_MONTHLY_PRICE: number = 99;
const PRO_MONTHLY_YEARLY_PRICE: number =
  PRO_MONTHLY_PRICE * (1 - YEARLY_DISCOUNT);
const ULTIMATE_MONTHLY_PRICE: number = 299;
const ULTIMATE_MONTHLY_YEARLY_PRICE: number =
  ULTIMATE_MONTHLY_PRICE * (1 - YEARLY_DISCOUNT);

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
    monthly: {
      price: ESSENTIAL_MONTHLY_PRICE,
      totalYearly: ESSENTIAL_MONTHLY_PRICE * 12,
      url: "https://buy.stripe.com/6oU28q787eZu4Hi0wBes000",
    },
    yearly: {
      price: Math.floor(ESSENTIAL_MONTHLY_YEARLY_PRICE),
      totalYearly: Math.round(ESSENTIAL_MONTHLY_YEARLY_PRICE * 12 * 100) / 100,
      url: "https://buy.stripe.com/5kQdR8dwv18E0r2djnes005",
      comparisonPrice: ESSENTIAL_MONTHLY_PRICE * 12,
    },
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
    monthly: {
      price: PRO_MONTHLY_PRICE,
      totalYearly: PRO_MONTHLY_PRICE * 12,
      url: "https://buy.stripe.com/aFafZg6437x2b5G3INes001",
    },
    yearly: {
      price: Math.floor(PRO_MONTHLY_YEARLY_PRICE),
      totalYearly: Math.round(PRO_MONTHLY_YEARLY_PRICE * 12 * 100) / 100,
      url: "https://buy.stripe.com/8x2dR82RR6sY2za2EJes004",
      comparisonPrice: PRO_MONTHLY_PRICE * 12,
    },
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
    monthly: {
      price: ULTIMATE_MONTHLY_PRICE,
      totalYearly: ULTIMATE_MONTHLY_PRICE * 12,
      url: "https://buy.stripe.com/3cI00igIH3gM4Hi937es002",
    },
    yearly: {
      price: Math.floor(ULTIMATE_MONTHLY_YEARLY_PRICE),
      totalYearly: Math.round(ULTIMATE_MONTHLY_YEARLY_PRICE * 12 * 100) / 100,
      url: "https://buy.stripe.com/aFacN4bon9Fa7Tuenres006",
      comparisonPrice: ULTIMATE_MONTHLY_PRICE * 12,
    },
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col gap-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl font-semibold bg-linear-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-transparent">
            Institutional-grade data, at a retail price
          </p>
        </div>

        {/* Toggle */}
        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />

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
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">
                    <AnimatedPrice
                      value={isYearly ? plan.yearly.price : plan.monthly.price}
                    />
                  </span>
                  <span className="text-lg text-gray-500">per month</span>
                </div>
                <div className="text-sm text-gray-400 mb-4 overflow-hidden">
                  <span
                    key={isYearly ? "yearly" : "monthly"}
                    className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-300"
                  >
                    {isYearly ? (
                      <>
                        <span className="line-through text-gray-600">
                          ${plan.yearly.comparisonPrice}
                        </span>{" "}
                        ${plan.yearly.totalYearly} billed annually
                      </>
                    ) : (
                      `$${plan.monthly.totalYearly} total annually`
                    )}
                  </span>
                </div>
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
              <Button
                asChild
                className="relative w-full rounded-xl font-semibold transition-all bg-white hover:bg-gray-100 text-black py-6"
              >
                <a
                  href={isYearly ? plan.yearly.url : plan.monthly.url}
                  target="_blank"
                >
                  {plan.cta}
                </a>
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

interface PricingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

function PricingToggle({ isYearly, setIsYearly }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="text-sm relative inline-flex items-center gap-1 bg-[#1e1e32] rounded-full p-1 border border-gray-800/50">
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 h-[calc(75%)] bg-[#0666c6] rounded-full shadow-lg transition-all duration-500 ease-out",
            isYearly ? "left-[38%] w-[58%]" : "left-[3%] w-[30%]"
          )}
        />

        {/* Buttons */}
        <button
          onClick={() => setIsYearly(false)}
          className={`relative z-10 px-4 py-1 rounded-full font-medium transition-colors duration-300 ${
            !isYearly ? "text-white" : "text-gray-400 hover:text-gray-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`relative z-10 px-4 py-1 rounded-full font-medium transition-colors duration-300 flex items-center gap-2 ${
            isYearly ? "text-white" : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <span>Yearly</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black text-white text-xs font-semibold">
            Save 30%
          </span>
        </button>
      </div>
    </div>
  );
}

interface AnimatedPriceProps {
  value: number;
}

function AnimatedPrice({ value }: AnimatedPriceProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);

  useEffect(() => {
    const prevValue = prevValueRef.current;
    const diff = value - prevValue;

    if (diff === 0) return;

    const duration = 500; // ms
    const steps = 20;
    const stepValue = diff / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setDisplayValue(Math.round(prevValue + stepValue * currentStep));
      } else {
        setDisplayValue(value);
        clearInterval(interval);
      }
    }, stepDuration);

    prevValueRef.current = value;

    return () => clearInterval(interval);
  }, [value]);

  return <>${displayValue}</>;
}
