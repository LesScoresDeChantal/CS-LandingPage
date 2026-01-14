"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const providers = [
  {
    name: "Artemis",
    logo: "/images/sources-logo/Artemis-transparent.png",
    darkText: false,
  },
  {
    name: "CoinGecko",
    logo: "/images/sources-logo/CoingeckoAPI-transparent.png",
    darkText: false,
  },
  {
    name: "Chainlink",
    logo: "/images/sources-logo/ChainlinkEcosystem-transparent.png",
    darkText: false,
  },
  {
    name: "CryptoRank",
    logo: "/images/sources-logo/CryptoRank - Logo.png",
    darkText: false,
  },
  {
    name: "DefiLlama",
    logo: "/images/sources-logo/Defillama-transparent.svg",
    darkText: false,
  },
  {
    name: "De.Fi",
    logo: "/images/sources-logo/De.Fi-Transparent.png",
    darkText: false,
  },
  {
    name: "DropsTab",
    logo: "/images/sources-logo/dropstab_transparent.png",
    darkText: false,
  },
  {
    name: "GitHub",
    logo: "/images/sources-logo/GitHub-transparent.svg",
    darkText: false,
  },
  {
    name: "Google Trends",
    logo: "/images/sources-logo/GoogleTrends-transparent.png",
    darkText: false,
  },
  {
    name: "LunarCrush",
    logo: "/images/sources-logo/LunarCrush-transparent.png",
    darkText: false,
  },
  {
    name: "Stack.Money",
    logo: "/images/sources-logo/StackMoney-transparent.png",
    darkText: false,
  },
  {
    name: "TokenMetrics",
    logo: "/images/sources-logo/TokenMetrics-transparent.png",
    darkText: false,
  },
  {
    name: "TradingView",
    logo: "/images/sources-logo/Tradingview-transparent.svg",
    darkText: false,
  },
  {
    name: "TwitterScore",
    logo: "/images/sources-logo/TwitterScore-transparent.png",
    darkText: false,
  },
  {
    name: "X (Twitter)",
    logo: "/images/sources-logo/X-Transparent.png",
    darkText: false,
  },
];

export function DataProvidersSection() {
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
            Powered by{" "}
            <span className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-transparent">
              trusted data sources
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-400"
          >
            We aggregate data from the most reliable sources in the crypto
            industry to provide you with comprehensive and accurate insights.
          </motion.p>
        </div>

        {/* Providers Grid - Compact & Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {providers.map((provider, idx) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative"
              >
                <div
                  className={`flex h-20 items-center justify-center rounded-lg border border-gray-800/50 p-3 transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-[#0666c6]/10 ${
                    provider.darkText ? "bg-white/95" : "bg-gray-900/50"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      fill
                      className="object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          And many more sources to ensure the most complete crypto analysis
        </motion.p>
      </div>
    </section>
  );
}
