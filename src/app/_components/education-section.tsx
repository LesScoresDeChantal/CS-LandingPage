import { BookOpen, Check } from "lucide-react";

const learningPoints = [
  "Which metrics we track for each crypto",
  "What they reveal about risk, strength, and opportunity",
  "How to read community, liquidity, momentum, security, tech, and tokenomics",
  "How this information can help you avoid traps and focus on quality",
];

export function EducationSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Designed to Make You Smarter
            </h2>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Learn the logic behind great investing
            </h3>

            <p className="text-gray-300 mb-6">
              CryptoScores doesn&apos;t just give you a final score — it shows
              you the key metrics serious investors look at, and why they
              matter.
            </p>

            <p className="text-gray-400 mb-6">
              That&apos;s why we created a free GitBook that explains:
            </p>

            <div className="space-y-4 mb-8">
              {learningPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#0666c6]/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#05b5fb]" />
                  </div>
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-xl p-6 mb-8">
              <p className="text-gray-300">
                You don&apos;t just see numbers — you learn how to understand
                them to become better as an investor.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#0666c6]/10 border border-[#0666c6]/30 rounded-xl p-6">
              <BookOpen className="w-6 h-6 text-[#05b5fb] shrink-0" />
              <p className="text-gray-200">
                <span className="font-semibold text-white">
                  Access the gitbook in one click
                </span>{" "}
                from any CryptoScores analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
