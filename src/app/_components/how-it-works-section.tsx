import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Open Telegram",
    description: "Start a chat with your CryptoScores bot.",
    image: "/images/how-it-works/hiw-1.png",
  },
  {
    number: "2",
    title: "Ask for a crypto",
    description: "You can ask for a crypto with the search mode of your choice: Name, Symbol, or Coingecko ID.",
    image: "/images/how-it-works/hiw-2.webp",
  },
  {
    number: "3",
    title: "Get instant analysis",
    description:
      "Receive a complete dashboard with scores for community, liquidity, momentum, technology, security, tokenomics, and alerts.",
    image: "/images/how-it-works/hiw-3.webp",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How it works <span className="text-[#05b5fb]">(15 seconds)</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 shadow-2xl shadow-[#0666c6]/10">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className={`w-full h-auto ${index === 0 ? 'object-contain max-h-[400px]' : 'object-cover'}`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0666c6] to-[#05b5fb] flex items-center justify-center text-2xl font-bold text-white shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
