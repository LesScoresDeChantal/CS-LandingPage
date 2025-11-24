"use client";

import { motion } from "framer-motion";
import { BookOpen, Check } from "lucide-react";

const learningPoints = [
  "Which metrics we track for each crypto",
  "What they reveal about risk, strength, and opportunity",
  "How to read community, liquidity, momentum, security, tech, and tokenomics",
  "How this information can help you avoid traps and focus on quality",
];

export function EducationSection() {
  return (
    <section className="relative py-24 bg-linear-to-b from-black via-blue-950/20 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/50">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
              🎓 Designed to Make You Smarter
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-linear-to-b from-gray-900/80 to-black/80 border border-blue-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Learn the logic behind great investing <span className="text-green-400">(for free)</span>
            </h3>
            
            <p className="text-lg text-gray-300 mb-6">
              CryptoScores doesn&apos;t just give you a final score
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              it shows you the <span className="font-semibold text-purple-400">key metrics</span> serious investors look at, and why they matter.
            </p>

            <p className="text-gray-400 mb-6">
              That&apos;s why we created a free GitBook that explains:
            </p>

            <div className="space-y-4 mb-10">
              {learningPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 mb-8">
              <p className="text-lg text-gray-300">
                You don&apos;t just <span className="italic text-gray-400">see</span> numbers.
              </p>
              <p className="text-lg text-white font-semibold mt-2">
                You learn how to <span className="text-blue-400">understand</span> them to become{" "}
                <span className="text-purple-400">better as an investor</span>.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <BookOpen className="w-6 h-6 text-blue-400 shrink-0" />
              <p className="text-gray-200">
                <span className="font-semibold text-white">You can access the gitbook in one click</span> from any CryptoScores analysis
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
