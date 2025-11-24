import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to analyze your first crypto?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Open Telegram → type a name → get the truth.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0666c6] to-[#05b5fb] hover:from-[#0555a5] hover:to-[#0499da] text-white px-10 py-8 text-xl rounded-lg shadow-2xl shadow-[#0666c6]/30"
          >
            Start Free Now (14 Days)
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#05b5fb]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#05b5fb]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#05b5fb]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
