"use client";

export function Footer() {
  return (
    <footer className="relative py-12 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Legal information */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Legal information</h3>
                <p className="text-gray-400">
                  CryptoScores provides{" "}
                  <span className="font-semibold text-white">educational information only</span>.
                </p>
                <p className="text-gray-500 mt-1">No investment advice.</p>
              </div>
            </div>
          </div>

          {/* Footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                CryptoScores
              </p>
              <p className="text-sm">Analyze any crypto in 10 seconds</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <a
                href="mailto:contact@cryptoscores.com"
                className="hover:text-purple-400 transition-colors"
              >
                contact@CryptoScores.com
              </a>
              <span className="hidden sm:block text-gray-700">|</span>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <span className="hidden sm:block text-gray-700">|</span>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-900 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} CryptoScores. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
