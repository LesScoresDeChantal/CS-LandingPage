const moments = [
  {
    text: 'A crypto pumps and you want to know',
    highlight: "if it's real",
  },
  {
    text: 'Your favourite alt starts dropping and you wonder',
    highlight: 'if you should sell',
  },
  {
    text: 'You want to find',
    highlight: 'fast-moving opportunities before everyone else',
  },
  {
    text: 'You need to check',
    highlight: 'if a project is secure or a ticking bomb',
  },
  {
    text: 'A friend talks to you about',
    highlight: 'a project you never heard before',
  },
  {
    text: 'You want to manage your portfolio',
    highlight: 'without stress',
  },
  { text: "You don't have time for", highlight: 'deep research' },
];

export function MomentsSection() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            You&apos;ll love CryptoScores the most when...
          </h2>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {moments.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-2 size-2 shrink-0 rounded-full bg-[#05b5fb]" />
                <p className="text-lg text-gray-300">
                  {item.text}{' '}
                  <span className="font-semibold text-white">
                    {item.highlight}
                  </span>
                  {' — but still want high-quality decisions' ===
                    item.highlight &&
                    ' — but still want high-quality decisions'}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300">
              CryptoScores becomes your{' '}
              <span className="font-bold text-[#05b5fb]">
                10-second analyst
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
