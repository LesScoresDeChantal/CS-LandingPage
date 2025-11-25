import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Start using CryptoScores immediately with the chosen plan. You can cancel anytime.",
  },
  {
    question: "Where does your data come from?",
    answer:
      "We aggregate data from multiple verified sources including blockchain explorers, exchanges, GitHub, social media, and security audit firms. All data is cross-referenced for accuracy.",
  },
  {
    question: "How are scores calculated?",
    answer:
      "Our proprietary algorithm analyzes 6 key pillars: Technology, Community, Liquidity, Security, Fundamentals, and Opportunity. Each pillar contains multiple metrics weighted by importance.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. No questions asked, no cancellation fees.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day free trial so you can test the service risk-free. After the trial, subscriptions are non-refundable, but you can cancel anytime.",
  },
  {
    question: "Are real-time alerts really instant?",
    answer:
      "Yes, alerts are sent within seconds of detection. We monitor blockchain activity and market movements 24/7 to keep you informed in real-time.",
  },
  {
    question: "Can I use CryptoScores on mobile?",
    answer:
      "Yes! CryptoScores works directly through Telegram, which means you can access it from any device - mobile, tablet, or desktop.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Got questions? We have answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/30 border border-gray-800 rounded-xl px-6 data-[state=open]:border-[#0666c6]/50"
              >
                <AccordionTrigger className="text-white hover:text-[#05b5fb] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Can&apos;t find the answer to your question?{" "}
              <a
                href="mailto:contact@cryptoscores.com"
                className="text-[#05b5fb] hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
