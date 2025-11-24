"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I know in 10 seconds if a crypto is worth my time.",
    author: "Julien",
    role: "Long-term investor",
  },
  {
    quote: "Finally data that kills emotional decision-making.",
    author: "Manon",
    role: "Swing trader",
  },
  {
    quote: "It already saved me from two dangerous projects.",
    author: "Theo",
    role: "Beginner analyst",
  },
];

export function SocialProof() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            ❤️ Social Proof
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-linear-to-b from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="pt-4 border-t border-gray-800">
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional section: When you'll love CryptoScores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-linear-to-b from-purple-900/20 to-black/40 border border-purple-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              💥 The moments you&apos;ll love CryptoScores the most
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  text: "When a crypto pumps and you want to know",
                  highlight: "if it's real",
                },
                {
                  text: "When your favourite alt starts dropping and you wonder",
                  highlight: "if you should sell",
                },
                {
                  text: "When you want to find",
                  highlight: "fast-moving opportunities before everyone else",
                },
                {
                  text: "When you need to check",
                  highlight: "if a project is secure or a ticking bomb",
                },
                {
                  text: "When a friend talks to you about",
                  highlight: "a project you never heard before",
                },
                {
                  text: "When you want to manage your portfolio",
                  highlight: "without stress",
                },
                {
                  text: "When you don't have time for",
                  highlight: "deep research",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-500 mt-2" />
                  <p className="text-gray-300 text-lg">
                    {item.text}{" "}
                    <span className="font-semibold text-white">
                      {item.highlight}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xl text-gray-300">
                CryptoScores becomes your{" "}
                <span className="font-bold text-purple-400">
                  &quot;15-second analyst&quot;
                </span>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
