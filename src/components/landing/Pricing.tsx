"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$29",
    period: "/month",
    description: "For investors getting serious.",
    badge: null,
    badgeColor: "",
    features: [
      "Detailed rating of the best scored crypto 2x/day",
      "3 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice 30x/month",
    ],
    cta: "Start Free (14 days)",
    highlighted: false,
    icon: "🟡",
  },
  {
    name: "PRO",
    price: "$99",
    period: "/month",
    description: "For active investors.",
    badge: "Most popular",
    badgeColor: "from-yellow-500 to-orange-500",
    features: [
      "Detailed rating of the best scored crypto 2x/day",
      "12 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice 200x/month",
    ],
    cta: "Start Free (14 days)",
    highlighted: true,
    icon: "🟣",
  },
  {
    name: "Ultimate",
    price: "$299",
    period: "/month",
    description: "For serious portfolios.",
    badge: null,
    badgeColor: "",
    features: [
      "Detailed rating of best scored crypto 2x/day",
      "12 best scores from 18 thematic tables 2x/day",
      "Ask detailed rating of your choice unlimited",
    ],
    cta: "Start now",
    highlighted: false,
    icon: "🔥",
  },
];

export function Pricing() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            💰 Pricing Plans
          </h2>
          <p className="text-xl text-gray-400">Institutional-grade data, at a retail price</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: plan.highlighted ? 1.05 : 1.02, y: -5 }}
              className="relative group"
            >
              {/* Glow effect for highlighted plan */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-linear-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              )}

              <div
                className={`relative h-full rounded-3xl backdrop-blur-sm transition-all ${
                  plan.highlighted
                    ? "bg-linear-to-b from-purple-900/80 to-blue-900/80 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20"
                    : "bg-linear-to-b from-gray-900/80 to-gray-950/80 border border-gray-800"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${plan.badgeColor} shadow-lg`}>
                      <Star className="w-4 h-4 text-white fill-white" />
                      <span className="text-sm font-bold text-white">{plan.badge}</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 italic">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-xl text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.highlighted ? "bg-purple-500/20" : "bg-gray-800"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${plan.highlighted ? "text-purple-400" : "text-green-400"}`}
                          />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className={`w-full rounded-xl ${
                      plan.highlighted
                        ? "bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30"
                        : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pay in crypto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-sm">
            <span className="text-2xl">🔗</span>
            <div className="text-left">
              <p className="text-white font-semibold">Pay in crypto</p>
              <p className="text-sm text-gray-400">
                Available upon request:{" "}
                <a href="mailto:contact@cryptoscores.com" className="text-purple-400 hover:underline">
                  contact@CryptoScores.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
