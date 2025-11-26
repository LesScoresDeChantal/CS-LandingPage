import { Card } from "@/components/ui/card";
import { Zap, Shield, Search, Target } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Spot high-potential cryptos before the crowd",
  },
  {
    icon: Shield,
    title: "Avoid risky or weak projects",
  },
  {
    icon: Search,
    title: "Check the quality of any crypto in seconds",
  },
  {
    icon: Target,
    title: "Focus only on the facts that truly matter",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Investors Use CryptoScores
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            Investors are done juggling 25 tabs and scattered tools.
          </p>
          <p className="text-2xl text-white font-semibold flex flex-col gap-2">
            <span>They want one place that gathers all the data they need</span>
            <span className="text-[#05b5fb]">
              …and actually scores it for them.
            </span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 mb-8">
            With CryptoScores, they can:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-[#0666c6]/50 transition-colors p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb] flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed pt-2">
                    {feature.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl sm:text-2xl font-semibold text-white">
            Less emotion. More clarity. Better decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
