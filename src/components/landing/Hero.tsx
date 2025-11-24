"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">
              7,600+ cryptocurrencies analyzed daily
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
          >
            Analyze any crypto in{" "}
            <span className="text-purple-400">10 seconds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-4"
          >
            <span className="font-semibold text-white">
              Spot opportunities. Avoid traps.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            CryptoScores shows you the real quality of{" "}
            <span className="text-purple-400 font-semibold">
              7,600+ cryptocurrencies
            </span>
            , updated daily…{" "}
            <span className="text-white font-semibold">
              directly inside Telegram.
            </span>
          </motion.p>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm sm:text-base">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm sm:text-base">Instant access</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full group"
            >
              Start Free — Get Your First Scores in 10 Seconds
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Demo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-sm p-8">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-black/60 rounded-lg p-6 font-mono text-sm text-left">
                  <div className="text-gray-500">$ /score PYTH</div>
                  <div className="mt-2 text-green-400">✓ Analyzing PYTH...</div>
                  <div className="mt-1 text-purple-400">
                    ✓ Dashboard ready in 8 seconds
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-purple-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
