import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const faqs = [
  {
    question: 'How do investors typically use CryptoScores?',
    answer: (
      <>
        They first scan their portfolio to see which cryptos are strong or
        risky. Then they evaluate the projects on their radar. After that, the
        real fun starts, exploring the market to uncover high-quality
        opportunities.
      </>
    ),
  },
  {
    question: 'How does the 14-day free trial work?',
    answer: (
      <>
        Start using CryptoScores immediately with the chosen plan. You can
        cancel anytime within 14 days. After 14 days your card will be charged
        monthly.
      </>
    ),
  },
  {
    question: 'Where does your data come from?',
    answer: (
      <>
        We aggregate data from multiple verified sources including Web3 Data
        Providers, Crypto Market Analytics, GitHub, social media, and security
        audit firms. Some of the metrics are created and calculated by us, for
        example the{' '}
        <a
          href="https://cryptoscores.gitbook.io/docs/scores/security/defensive-multi-score"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#05b5fb] hover:underline"
        >
          Defensive multi-score
        </a>
        .
      </>
    ),
  },
  {
    question: 'How are scores calculated?',
    answer: (
      <>
        Our proprietary algorithm analyzes 6 key pillars: Technology, Community,
        Liquidity, Security, Fundamentals, and Opportunity. Each pillar contains
        multiple metrics weighted by importance. Each metric compares thousand
        of cryptos in order to give a precise score.
      </>
    ),
  },
  {
    question: 'Can I cancel anytime? Do you offer refunds?',
    answer: (
      <>
        Yes. You can cancel your subscription whenever you want. Your
        subscription will remain valid until its term but you will not be
        charged anymore. Your 14-day free trial lets you test the tool
        risk-free. After the trial ends, subscriptions are non-refundable.
      </>
    ),
  },
  {
    question:
      'Does CryptoScores work on mobile? Do I need to install anything?',
    answer: (
      <>
        CryptoScores works directly through your browser or in Telegram. No app
        store. No installation. You can access it from any device: mobile,
        desktop, or tablet.
      </>
    ),
  },
  {
    question: 'Is CryptoScores only for pros?',
    answer: (
      <>
        Not at all. It&apos;s designed so that beginners instantly understand
        whether a crypto looks strong or weak, while advanced investors get deep
        analytics and metrics. Everyone wins.
      </>
    ),
  },
  {
    question: 'How is this different from CoinMarketCap or other tools?',
    answer: (
      <>
        CMC shows raw data.
        <br />
        <br />
        We show interpreted, contextualized, and scored data across 6 pillars,
        the things that potentially impact price action.
        <br />
        <br />
        You see weakness, strength, momentum, and risk instantly.
      </>
    ),
  },
  {
    question: 'Do I need to install anything?',
    answer: (
      <>
        No installation, no app store. CryptoScores works instantly through
        Telegram.
      </>
    ),
  },
  {
    question: 'Do you track my investments or wallet?',
    answer: (
      <>
        No. We do not track portfolios, wallets, or balances. CryptoScores
        analyzes projects, not people.
      </>
    ),
  },
  {
    question: 'Is CryptoScores’ Telegram bot still available?',
    answer: (
      <>
        <p>Yes, we kept it alive for you! Scan this QR code to open it</p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://t.me/CryptoScoresBot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/qr-code-tg-bot.png"
              alt="Telegram Bot QR Code - @CRYPTOSCORESBOT"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </a>
        </div>
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-gray-950 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Got questions? We have answers.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-gray-800 bg-gray-900/30 px-6 data-[state=open]:border-[#0666c6]/50"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#05b5fb]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Can&apos;t find the answer to your question?{' '}
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
