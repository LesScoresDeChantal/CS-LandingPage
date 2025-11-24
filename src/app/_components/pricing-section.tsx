import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$29",
    period: "/month",
    description: "For investors getting serious.",
    features: [
      "Detailed rating of the best scored crypto 2x/day",
      "3 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice 30x/month",
    ],
    cta: "Start Free (14 days)",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "$99",
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
  },
  {
    name: "Ultimate",
    price: "$299",
    period: "/month",
    description: "For serious portfolios.",
    features: [
      "Detailed rating of best scored crypto 2x/day",
      "12 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice unlimited",
    ],
    cta: "Start now",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-400">Institutional-grade data, at a retail price</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#0666c6]/10 to-black border-[#0666c6]/50 shadow-xl shadow-[#0666c6]/10"
                  : "bg-gray-900/30 border-gray-800"
              }`}
            >
              {plan.badge && (
                <Badge
                  variant="outline"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] border-0 text-white"
                >
                  {plan.badge}
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 italic">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-xl text-gray-400">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-[#0666c6]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#05b5fb]" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#0666c6] to-[#05b5fb] hover:from-[#0555a5] hover:to-[#0499da] text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-2">
            Pay in crypto?{" "}
            <a href="mailto:contact@cryptoscores.com" className="text-[#05b5fb] hover:underline">
              contact@cryptoscores.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
