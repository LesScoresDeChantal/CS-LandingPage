'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const providers = [
  {
    name: 'Artemis',
    logo: '/images/sources-logo/Artemis_id3FEaLHLd_0.png',
    darkText: true,
  },
  {
    name: 'CoinGecko',
    logo: '/images/sources-logo/CGAPI-Lockup@2x.png',
    darkText: true,
  },
  {
    name: 'Chainlink',
    logo: '/images/sources-logo/Chainlink Ecosystem - Logo.png',
    darkText: false,
  },
  {
    name: 'CryptoRank',
    logo: '/images/sources-logo/CryptoRank - Logo.png',
    darkText: true,
  },
  {
    name: 'DefiLlama',
    logo: '/images/sources-logo/defillama.png',
    darkText: false,
  },
  {
    name: 'De.Fi',
    logo: '/images/sources-logo/De.Fi - Logo .png',
    darkText: true,
  },
  {
    name: 'DropsTab',
    logo: '/images/sources-logo/DropsTab - Logo.png',
    darkText: true,
  },
  {
    name: 'GitHub',
    logo: '/images/sources-logo/GitHub_Lockup_Light.png',
    darkText: false,
  },
  {
    name: 'Google Trends',
    logo: '/images/sources-logo/Google Trends - Logo .png',
    darkText: true,
  },
  {
    name: 'LunarCrush',
    logo: '/images/sources-logo/LunarCrush - Logo.png',
    darkText: true,
  },
  {
    name: 'Stack.Money',
    logo: '/images/sources-logo/StackMoney.png',
    darkText: true,
  },
  {
    name: 'TokenMetrics',
    logo: '/images/sources-logo/TokenMetrics - Logo.png',
    darkText: true,
  },
  {
    name: 'TwitterScore',
    logo: '/images/sources-logo/TwitterScore - Logo.png',
    darkText: true,
  },
  {
    name: 'X (Twitter)',
    logo: '/images/sources-logo/x-logo-white.png',
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
            Powered by{' '}
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
                    provider.darkText ? 'bg-white/95' : 'bg-gray-900/50'
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
