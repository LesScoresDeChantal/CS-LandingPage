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
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: AlertTriangle,
    category: "Alerts",
    whatYouSee: "Unusual on-chain and off-chain activity",
    whyItMatters: "Spot moves before the market reacts",
  },
  {
    icon: Users,
    category: "Community",
    whatYouSee: "Growth, sentiment, engagement",
    whyItMatters: "A weak community = slow death",
  },
  {
    icon: Droplets,
    category: "Liquidity",
    whatYouSee: "Volume, TVL, active addresses",
    whyItMatters: "No liquidity = no entry or exit",
  },
  {
    icon: TrendingUp,
    category: "Momentum",
    whatYouSee: "Who's buying/selling right now",
    whyItMatters: "Avoid being the last one in",
  },
  {
    icon: Lock,
    category: "Security",
    whatYouSee: "Audits, risks, vulnerabilities",
    whyItMatters: "Never buy a future hack again",
  },
  {
    icon: Code,
    category: "Technology",
    whatYouSee: "Code quality & innovation",
    whyItMatters: "Real projects innovate early",
  },
  {
    icon: Coins,
    category: "Tokenomics",
    whatYouSee: "Inflation, utility, distribution",
    whyItMatters: "Avoid endless sell pressure",
  },
  {
    icon: Newspaper,
    category: "News",
    whatYouSee: "Structured impact analysis",
    whyItMatters: "Understand what moves prices",
  },
];

export function AnalysisCategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What you&apos;ll find inside CryptoScores
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block max-w-5xl mx-auto bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-[#0666c6]/10 to-[#05b5fb]/10 border-b border-gray-800">
            <div className="text-[#05b5fb] font-semibold text-lg">Category</div>
            <div className="text-[#05b5fb] font-semibold text-lg">
              What You See
            </div>
            <div className="text-[#05b5fb] font-semibold text-lg">
              Why It Matters
            </div>
          </div>

          {/* Rows */}
          {categories.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800/50 last:border-b-0 hover:bg-gray-800/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb]">
                  <item.icon className="w-5 h-5 text-white" />
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
        <div className="lg:hidden space-y-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#0666c6] to-[#05b5fb]">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white">
                  {item.category}
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-[#05b5fb] font-semibold mb-1">
                    What You See
                  </div>
                  <div className="text-gray-400">{item.whatYouSee}</div>
                </div>
                <div>
                  <div className="text-sm text-[#05b5fb] font-semibold mb-1">
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
            className="px-8 py-6 text-lg font-semibold bg-linear-to-r from-[#0666c6] to-[#05b5fb] hover:opacity-90 transition-opacity"
          >
            <a href="#pricing">Start for free</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
