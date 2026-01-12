"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState, useEffect, useRef, Suspense } from "react";
import { useQueryState } from "nuqs";

// Déclare le type pour le Twitter pixel
declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    twq?: (
      command: string,
      eventId: string,
      params?: { value?: string | null },
    ) => void;
  }
}

type PricePlan = {
  price: number;
  totalYearly: number;
  url: string;
  comparisonPrice?: number;
};

type Plan = {
  name: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
  monthly: PricePlan;
  yearly: PricePlan;
};

const YEARLY_DISCOUNT = 0.3;

const ESSENTIAL_MONTHLY_PRICE = 29;
const ESSENTIAL_MONTHLY_YEARLY_PRICE: number = Math.floor(
  ESSENTIAL_MONTHLY_PRICE * (1 - YEARLY_DISCOUNT),
);

const PRO_MONTHLY_PRICE = 99;
const PRO_MONTHLY_YEARLY_PRICE: number = Math.floor(
  PRO_MONTHLY_PRICE * (1 - YEARLY_DISCOUNT),
);
const ULTIMATE_MONTHLY_PRICE = 299;
const ULTIMATE_MONTHLY_YEARLY_PRICE: number = Math.floor(
  ULTIMATE_MONTHLY_PRICE * (1 - YEARLY_DISCOUNT),
);

// Stripe URLs configuration
const STRIPE_URLS = {
  production: {
    essentialMonthly: "https://buy.stripe.com/6oU28q787eZu4Hi0wBes000",
    essentialYearly: "https://buy.stripe.com/5kQdR8dwv18E0r2djnes005",
    proMonthly: "https://buy.stripe.com/aFafZg6437x2b5G3INes001",
    proYearly: "https://buy.stripe.com/8x2dR82RR6sY2za2EJes004",
    ultimateMonthly: "https://buy.stripe.com/3cI00igIH3gM4Hi937es002",
    ultimateYearly: "https://buy.stripe.com/aFacN4bon9Fa7Tuenres006",
  },
  staging: {
    essentialMonthly: "https://buy.stripe.com/test_eVqbJ30hs9aqdrMdyS9sk01",
    essentialYearly: "https://buy.stripe.com/test_4gM7sN2pA9aq9bw8ey9sk07",
    proMonthly: "https://buy.stripe.com/test_eVqfZje8i4UafzU8ey9sk02",
    proYearly: "https://buy.stripe.com/test_28E4gB5BM72i87seCW9sk06",
    ultimateMonthly: "https://buy.stripe.com/test_14A3cx4xI9aq0F03Yi9sk04",
    ultimateYearly: "https://buy.stripe.com/test_aFa00lggq5Ye1J4eCW9sk05",
  },
};

const getStripeUrls = () => {
  const isStaging = process.env.NEXT_PUBLIC_ENV === "staging";
  return isStaging ? STRIPE_URLS.staging : STRIPE_URLS.production;
};

const getPlans = (): Plan[] => {
  const urls = getStripeUrls();

  return [
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
        url: urls.essentialMonthly,
      },
      yearly: {
        price: Math.floor(ESSENTIAL_MONTHLY_YEARLY_PRICE),
        totalYearly:
          Math.round(ESSENTIAL_MONTHLY_YEARLY_PRICE * 12 * 100) / 100,
        url: urls.essentialYearly,
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
        url: urls.proMonthly,
      },
      yearly: {
        price: Math.floor(PRO_MONTHLY_YEARLY_PRICE),
        totalYearly: Math.round(PRO_MONTHLY_YEARLY_PRICE * 12 * 100) / 100,
        url: urls.proYearly,
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
        url: urls.ultimateMonthly,
      },
      yearly: {
        price: Math.floor(ULTIMATE_MONTHLY_YEARLY_PRICE),
        totalYearly: Math.round(ULTIMATE_MONTHLY_YEARLY_PRICE * 12 * 100) / 100,
        url: urls.ultimateYearly,
        comparisonPrice: ULTIMATE_MONTHLY_PRICE * 12,
      },
    },
  ];
};

export function PricingSection({ className }: { className?: string }) {
  return (
    <Suspense fallback={<div className="bg-black py-24" />}>
      <PricingSectionContent className={className} />
    </Suspense>
  );
}

function PricingSectionContent({ className }: { className?: string }) {
  const [isYearly, setIsYearly] = useState(false);
  const [code] = useQueryState("code");
  const plans = getPlans();

  const handlePricingClick = (url: string, value: string) => {
    if (typeof window !== "undefined" && window.twq) {
      window.twq("event", "tw-qfuhj-qu1p0", {
        value,
      });
    }

    // Add prefilled_promo_code query param if code exists
    let finalUrl = url;
    if (code) {
      const separator = url.includes("?") ? "&" : "?";
      finalUrl = `${url}${separator}prefilled_promo_code=${encodeURIComponent(code)}`;
    }

    window.open(finalUrl, "_blank");
  };

  return (
    <section id="pricing" className={cn("bg-black py-12", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-8 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Pricing Plans
          </h2>
          <p className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-xl font-semibold text-transparent">
            Institutional-grade data, at a retail price
          </p>
        </div>

        {/* Toggle */}
        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all ${
                plan.highlighted
                  ? "border-2 border-[#0666c6] bg-black shadow-2xl shadow-[#0666c6]/10"
                  : "border border-gray-800/80 bg-black"
              }`}
            >
              {plan.highlighted && (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_top_left,rgba(6,102,198,0.2)_10%,rgba(6,102,198,0.1)_30%,transparent_70%)]" />
              )}
              {/* Header with Badge */}
              <div className="relative mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                {plan.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0666c6] px-2.5 py-1 text-xs font-semibold text-white">
                    ⭐ {plan.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="relative mb-8">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    <AnimatedPrice
                      value={isYearly ? plan.yearly.price : plan.monthly.price}
                    />
                  </span>
                  <span className="text-lg text-gray-500">per month</span>
                </div>
                <div className="mb-4 overflow-hidden text-sm text-gray-400">
                  <span
                    key={isYearly ? "yearly" : "monthly"}
                    className="inline-block duration-300 animate-in fade-in slide-in-from-bottom-2"
                  >
                    {isYearly ? (
                      <>
                        <span className="text-gray-600 line-through">
                          ${plan.yearly.comparisonPrice}
                        </span>{" "}
                        ${plan.yearly.totalYearly} billed annually
                      </>
                    ) : (
                      `$${plan.monthly.totalYearly} total annually`
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="relative mb-8 space-y-3.5">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gray-700/50">
                      <Check className="size-3.5 text-gray-400" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                onClick={() => {
                  const selectedPlan = isYearly ? plan.yearly : plan.monthly;
                  handlePricingClick(
                    selectedPlan.url,
                    `${plan.name.toLocaleLowerCase()}-${
                      isYearly ? "yearly" : "monthly"
                    }`,
                  );
                }}
                className="relative w-full cursor-pointer rounded-xl bg-white py-6 font-semibold text-black transition-all hover:bg-gray-100"
              >
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

type PricingToggleProps = {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
};

function PricingToggle({ isYearly, setIsYearly }: PricingToggleProps) {
  return (
    <div className="mb-4 flex items-center justify-center">
      <div className="relative inline-flex items-center gap-1 rounded-full border border-gray-800/50 bg-[#1e1e32] p-1 text-sm">
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 h-[calc(75%)] bg-[#0666c6] rounded-full shadow-lg transition-all duration-500 ease-out",
            isYearly ? "left-[38%] w-[58%]" : "left-[3%] w-[30%]",
          )}
        />

        {/* Buttons */}
        <button
          onClick={() => setIsYearly(false)}
          className={`relative z-10 rounded-full px-4 py-1 font-medium transition-colors duration-300 ${
            !isYearly ? "text-white" : "text-gray-400 hover:text-gray-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`relative z-10 flex items-center gap-2 rounded-full px-4 py-1 font-medium transition-colors duration-300 ${
            isYearly ? "text-white" : "text-gray-400 hover:text-gray-300"
          }`}
        >
          <span>Yearly</span>
          <span className="inline-flex items-center rounded-full bg-black px-2.5 py-0.5 text-xs font-semibold text-white">
            Save 30%
          </span>
        </button>
      </div>
    </div>
  );
}

type AnimatedPriceProps = {
  value: number;
};

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
