import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-gray-950 py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to analyze your first crypto?
          </h2>

          <p className="mb-10 text-xl text-gray-300">
            Open Telegram → type a name → get the truth.
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-lg bg-gradient-to-r from-[#0666c6] to-[#05b5fb] px-10 py-8 text-xl text-white shadow-2xl shadow-[#0666c6]/30 hover:from-[#0555a5] hover:to-[#0499da]"
          >
            <a href="#pricing">
              Start Free Now (14 Days)
              <ArrowRight className="ml-2 size-6" />
            </a>
          </Button>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#05b5fb]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#05b5fb]" />
              <span>Mobile & Desktop friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-[#05b5fb]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
