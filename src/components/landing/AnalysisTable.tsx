"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Users,
  Droplets,
  TrendingUp,
  Lock,
  Code,
  Coins,
  Newspaper,
} from "lucide-react";

const categories = [
  {
    icon: AlertTriangle,
    category: "Alerts",
    whatYouLearn: "Unusual on-chain and off-chain activity",
    whyItMatters: "Spot moves before the market reacts",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: Users,
    category: "Community",
    whatYouLearn: "Growth, sentiment, engagement",
    whyItMatters: "A weak community = slow death",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: Droplets,
    category: "Liquidity",
    whatYouLearn: "Volume, TVL, active addresses",
    whyItMatters: "No liquidity = no entry or exit",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: TrendingUp,
    category: "Momentum",
    whatYouLearn: "Who's buying/selling right now",
    whyItMatters: "Avoid being the last one in",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: Lock,
    category: "Security",
    whatYouLearn: "Audits, risks, vulnerabilities",
    whyItMatters: "Never buy a future hack again",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: Code,
    category: "Technology",
    whatYouLearn: "Code quality & innovation",
    whyItMatters: "Real projects innovate early",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: Coins,
    category: "Tokenomics",
    whatYouLearn: "Inflation, utility, distribution",
    whyItMatters: "Avoid endless sell pressure",
    gradient: "from-purple-600 to-purple-500",
  },
  {
    icon: Newspaper,
    category: "News",
    whatYouLearn: "Structured impact analysis",
    whyItMatters: "Understand what moves prices",
    gradient: "from-purple-600 to-purple-500",
  },
];

export function AnalysisTable() {
  return (
    <section className="relative py-24 bg-linear-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            🔎 What CryptoScores analyzes for you
          </h2>
        </motion.div>

        {/* Desktop table view */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm"
          >
            {/* Table header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-linear-to-r from-purple-900/30 to-blue-900/30 border-b border-gray-800">
              <div className="text-purple-400 font-semibold text-lg">
                Category
              </div>
              <div className="text-purple-400 font-semibold text-lg">
                What You See
              </div>
              <div className="text-purple-400 font-semibold text-lg">
                Why It Matters
              </div>
            </div>

            {/* Table rows */}
            {categories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800/50 last:border-b-0 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-linear-to-br ${item.gradient}`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-white">
                    {item.category}
                  </span>
                </div>
                <div className="text-gray-400">{item.whatYouLearn}</div>
                <div className="text-gray-300">{item.whyItMatters}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile card view */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-xl bg-linear-to-br ${item.gradient}`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white">
                  {item.category}
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-purple-400 font-semibold mb-1">
                    What You Learn
                  </div>
                  <div className="text-gray-400">{item.whatYouLearn}</div>
                </div>
                <div>
                  <div className="text-sm text-purple-400 font-semibold mb-1">
                    Why It Matters
                  </div>
                  <div className="text-gray-300">{item.whyItMatters}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
