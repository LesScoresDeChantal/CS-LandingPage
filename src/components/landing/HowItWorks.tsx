"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search as SearchIcon, LayoutDashboard } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Open Telegram",
    description: "Start a chat with your CryptoScores bot.",
  },
  {
    number: "2",
    icon: SearchIcon,
    title: "Ask for a crypto",
    description: "Search by Name, Symbol, or Coingecko ID",
    examples: ["/score PYTH", "/score bitcoin", "/score BTC"],
  },
  {
    number: "3",
    icon: LayoutDashboard,
    title: "Get a full dashboard instantly",
    description: "Including:",
    features: [
      "Community",
      "Liquidity",
      "Momentum",
      "Technology",
      "Security",
      "Tokenomics",
      "Alerts (unusual on-chain events)",
    ],
  },
];

export function HowItWorks() {
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
            📱 How it works <span className="text-purple-400">(15 seconds)</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 last:mb-0"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content side */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-lg mb-4">{step.description}</p>
                      
                      {step.examples && (
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 font-mono text-sm">
                          {step.examples.map((example, i) => (
                            <div key={i} className="text-purple-400 mb-1 last:mb-0">
                              {example}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {step.features && (
                        <ul className="space-y-2">
                          {step.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <div className="w-2 h-2 rounded-full bg-purple-500" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-linear-to-b from-gray-900/80 to-black/80 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 rounded-2xl" />
                    <div className="relative">
                      {index === 0 && (
                        <div className="flex items-center justify-center h-48">
                          <MessageCircle className="w-24 h-24 text-purple-500" strokeWidth={1.5} />
                        </div>
                      )}
                      {index === 1 && (
                        <div className="bg-black/60 rounded-xl p-6 font-mono text-sm">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="text-gray-500">Choose your search mode:</div>
                          <div className="mt-3 space-y-2">
                            <div className="text-purple-400">1. Name</div>
                            <div className="text-purple-400">2. Symbol</div>
                            <div className="text-purple-400">3. Coingecko ID</div>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <span className="text-green-400 font-semibold">Overall Score</span>
                            <span className="text-2xl font-bold text-white">99%</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {["Community", "Liquidity", "Momentum", "Security"].map((cat, i) => (
                              <div key={i} className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-center">
                                <div className="text-xs text-gray-400 mb-1">{cat}</div>
                                <div className="text-lg font-bold text-white">{95 - i * 2}%</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
