const moments = [
  { text: "When a crypto pumps and you want to know", highlight: "if it's real" },
  { text: "When your favourite alt starts dropping and you wonder", highlight: "if you should sell" },
  { text: "When you want to find", highlight: "fast-moving opportunities before everyone else" },
  { text: "When you need to check", highlight: "if a project is secure or a ticking bomb" },
  { text: "When a friend talks to you about", highlight: "a project you never heard before" },
  { text: "When you want to manage your portfolio", highlight: "without stress" },
  { text: "When you don't have time for", highlight: "deep research" },
];

export function MomentsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            The moments you&apos;ll love CryptoScores the most
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {moments.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 w-2 h-2 rounded-full bg-[#05b5fb] mt-2" />
                <p className="text-gray-300 text-lg">
                  {item.text}{" "}
                  <span className="font-semibold text-white">{item.highlight}</span>
                  {" — but still want high-quality decisions" === item.highlight && " — but still want high-quality decisions"}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300">
              CryptoScores becomes your{" "}
              <span className="font-bold text-[#05b5fb]">&quot;15-second analyst&quot;</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
