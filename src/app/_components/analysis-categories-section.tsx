import {
  AlertTriangle,
  Users,
  Droplets,
  TrendingUp,
  Lock,
  Code,
  Coins,
  Newspaper,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    icon: AlertTriangle,
    category: 'Alerts',
    whatYouSee: 'Unusual on-chain and off-chain activity',
    whyItMatters: 'Spot moves before the market reacts',
  },
  {
    icon: Users,
    category: 'Community',
    whatYouSee: 'Growth, sentiment, engagement',
    whyItMatters: 'A weak community = slow death',
  },
  {
    icon: Droplets,
    category: 'Liquidity',
    whatYouSee: 'Volume, TVL, active addresses',
    whyItMatters: 'No liquidity = no entry or exit',
  },
  {
    icon: TrendingUp,
    category: 'Opportunity',
    whatYouSee: "Who's buying/selling right now",
    whyItMatters: 'Avoid being the last one in',
  },
  {
    icon: Lock,
    category: 'Security',
    whatYouSee: 'Audits, risks, vulnerabilities',
    whyItMatters: 'Never buy a future hack again',
  },
  {
    icon: Code,
    category: 'Technology',
    whatYouSee: 'Code quality & innovation',
    whyItMatters: 'Real projects innovate early',
  },
  {
    icon: Coins,
    category: 'Tokenomics',
    whatYouSee: 'Inflation, utility, distribution',
    whyItMatters: 'Avoid endless sell pressure',
  },
  {
    icon: Newspaper,
    category: 'News',
    whatYouSee: 'Structured impact analysis',
    whyItMatters: 'Understand what moves prices',
  },
];

export function AnalysisCategoriesSection() {
  return (
    <section id="categories" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            What you&apos;ll find inside CryptoScores
          </h2>
        </div>

        {/* Desktop table */}
        <div className="mx-auto hidden max-w-5xl overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 lg:block">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 border-b border-gray-800 bg-gradient-to-r from-[#0666c6]/10 to-[#05b5fb]/10 p-6">
            <div className="text-lg font-semibold text-[#05b5fb]">Category</div>
            <div className="text-lg font-semibold text-[#05b5fb]">
              What You See
            </div>
            <div className="text-lg font-semibold text-[#05b5fb]">
              Why It Matters
            </div>
          </div>

          {/* Rows */}
          {categories.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 border-b border-gray-800/50 p-6 transition-colors last:border-b-0 hover:bg-gray-800/30"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb] p-2">
                  <item.icon className="size-5 text-white" />
                </div>
                <span className="font-semibold text-white">
                  {item.category}
                </span>
              </div>
              <div className="text-gray-400">{item.whatYouSee}</div>
              <div className="text-gray-300">{item.whyItMatters}</div>
            </div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="space-y-4 lg:hidden">
          {categories.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-gray-900/30 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-r from-[#0666c6] to-[#05b5fb] p-3">
                  <item.icon className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {item.category}
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 text-sm font-semibold text-[#05b5fb]">
                    What You See
                  </div>
                  <div className="text-gray-400">{item.whatYouSee}</div>
                </div>
                <div>
                  <div className="mb-1 text-sm font-semibold text-[#05b5fb]">
                    Why It Matters
                  </div>
                  <div className="text-gray-300">{item.whyItMatters}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-[#0666c6]/25 transition-all hover:scale-105 hover:from-[#0555a5] hover:to-[#0499da] hover:shadow-[#0666c6]/40"
          >
            <a href="#pricing">Start for free</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
