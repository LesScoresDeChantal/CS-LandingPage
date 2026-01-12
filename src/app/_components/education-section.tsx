import { BookOpen, Check } from 'lucide-react';

const learningPoints = [
  'Which metrics we track for each crypto',
  'What they reveal about risk, strength, and opportunity',
  'How to read community, liquidity, opportunity, security, tech, and tokenomics',
  'How this information can help you avoid traps and focus on quality',
];

export function EducationSection() {
  return (
    <section className="bg-gray-950 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Designed to Make You Smarter
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Learn while using CryptoScores
            </h3>

            <p className="mb-6 text-gray-300">
              By using CryptoScores you will be investing your money in a
              smarter way. But we wanted you to be investing in yourself as
              well. Because we know how much knowledge is a strength.
            </p>

            <p className="mb-6 text-gray-400">
              That&apos;s why we created a free{' '}
              <a
                href="https://cryptoscores.gitbook.io/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#05b5fb] underline transition-colors hover:text-[#0666c6]"
              >
                GitBook
              </a>{' '}
              that explains:
            </p>

            <div className="mb-8 space-y-4">
              {learningPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0666c6]/20">
                    <Check className="size-4 text-[#05b5fb]" />
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="mb-8 rounded-xl border border-gray-800 bg-black/40 p-6">
              <p className="text-gray-300">
                You don&apos;t just see numbers you learn how to understand them
                to become better as an investor.
              </p>
            </div>

            <a
              href="https://cryptoscores.gitbook.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-[#0666c6]/30 bg-[#0666c6]/10 p-6 transition-all hover:border-[#0666c6]/50 hover:bg-[#0666c6]/20"
            >
              <BookOpen className="size-6 shrink-0 text-[#05b5fb] transition-transform group-hover:scale-110" />
              <p className="text-gray-200">
                <span className="font-semibold text-white transition-colors group-hover:text-[#05b5fb]">
                  Access the gitbook in one click
                </span>{' '}
                from any CryptoScores analysis
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
