import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-[#0666c6]/10 border border-[#0666c6]/20">
            <span className="text-sm text-[#05b5fb] font-medium">
              7,000+ cryptocurrencies analyzed daily
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Analyze any crypto in </span>
            <span className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-transparent">
              10 seconds.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-white mb-4 max-w-3xl mx-auto">
            Spot opportunities. Avoid traps.
          </p>

          <p className="text-lg text-gray-300 mb-2 max-w-3xl mx-auto">
            CryptoScores shows you the real quality of{" "}
            <span className="text-white font-semibold">
              7,600+ cryptocurrencies
            </span>
            , updated daily…
          </p>

          <p className="text-lg text-white font-semibold mb-10 max-w-3xl mx-auto">
            directly inside Telegram.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] hover:from-[#0555a5] hover:to-[#0499da] text-white px-10 py-7 text-lg rounded-lg shadow-lg shadow-[#0666c6]/20 transition-all"
            >
              Start Free — Get Your First Scores Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#05b5fb]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#05b5fb]" />
              <span>Mobile & Desktop friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#05b5fb]" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Stats preview */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "7,000+", label: "Cryptos analyzed" },
              { value: "100+", label: "Metrics Analyzed & Scored" },
              { value: "24/7", label: "Real-time updates" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
