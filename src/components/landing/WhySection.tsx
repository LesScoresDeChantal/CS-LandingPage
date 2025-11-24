"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Search, Target } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Spot high-potential cryptos before the crowd",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Avoid risky or weak projects",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Search,
    title: "Check the quality of any crypto in seconds",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Focus only on the facts that truly matter",
    gradient: "from-purple-500 to-pink-500",
  },
];

export function WhySection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            💡 Why CryptoScores changes everything
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            You don&apos;t need spreadsheets, on-chain explorers, GitHub, 12 dashboards and 25 open tabs.
          </p>
          <p className="text-2xl text-white font-semibold">
            You need one thing:{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Clear, instant answers about any crypto.
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {feature.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl font-semibold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Less emotion. More clarity. Better decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
