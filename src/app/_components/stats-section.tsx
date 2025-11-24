const stats = [
  {
    value: "7,000+",
    label: "Cryptocurrencies analyzed",
  },
  {
    value: "24/7",
    label: "Real-time updates",
  },
  {
    value: "99%",
    label: "Data accuracy",
  },
  {
    value: "10,000+",
    label: "Trusted investors",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Numbers that speak
          </h2>
          <p className="text-lg text-gray-400">
            Join thousands of investors who use CryptoScores to make better decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#0666c6] to-[#05b5fb] bg-clip-text text-transparent mb-2">
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
