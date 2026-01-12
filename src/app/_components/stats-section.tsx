const stats = [
  {
    value: '7,000+',
    label: 'Cryptocurrencies analyzed',
  },
  {
    value: '24/7',
    label: 'Real-time updates',
  },
  {
    value: '99%',
    label: 'Data accuracy',
  },
  {
    value: '10,000+',
    label: 'Trusted investors',
  },
];

export function StatsSection() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Numbers that speak
          </h2>
          <p className="text-lg text-gray-400">
            Join thousands of investors who use CryptoScores to make better
            decisions.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-gray-900/30 p-8 text-center"
            >
              <div className="mb-2 bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
