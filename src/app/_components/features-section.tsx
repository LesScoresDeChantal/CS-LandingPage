import { Card } from '@/components/ui/card';
import { Zap, Shield, Search, Target } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Spot high-potential cryptos before the crowd',
  },
  {
    icon: Shield,
    title: 'Avoid risky or weak projects',
  },
  {
    icon: Search,
    title: 'Check the quality of any crypto in seconds',
  },
  {
    icon: Target,
    title: 'Focus only on the facts that truly matter',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Why Investors Use CryptoScores
          </h2>
          <p className="mb-4 text-xl text-gray-400">
            Investors are done juggling 25 tabs and scattered tools.
          </p>
          <p className="flex flex-col gap-2 text-2xl font-semibold text-white">
            <span>They want one place that gathers all the data they need</span>
            <span className="text-[#05b5fb]">
              …and actually scores it for them.
            </span>
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-3xl">
          <p className="mb-8 text-lg text-gray-300">
            With CryptoScores, they can:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-[#0666c6]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb]">
                    <feature.icon className="size-6 text-white" />
                  </div>
                  <p className="pt-2 text-lg leading-relaxed text-gray-200">
                    {feature.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-white sm:text-2xl">
            Less emotion. More clarity. Better decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
