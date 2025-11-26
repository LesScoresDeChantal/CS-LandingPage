import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Legal information */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Legal information
                </h3>
                <p className="text-gray-400">
                  CryptoScores provides{" "}
                  <span className="font-semibold text-white">
                    educational information only
                  </span>
                  .
                </p>
                <p className="text-gray-500 mt-1">No investment advice.</p>
              </div>
            </div>
          </div>

          {/* Footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
            <div className="text-center md:text-left">
              <div className="mb-2">
                <Image
                  src="/images/cryptoScoresVector-02.svg"
                  alt="CryptoScores"
                  width={120}
                  height={45}
                  className="mx-auto md:mx-0"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <a
                href="mailto:contact@cryptoscores.com"
                className="hover:text-[#05b5fb] transition-colors"
              >
                contact@cryptoscores.com
              </a>
              <Separator
                orientation="vertical"
                className="hidden sm:block h-4 bg-gray-800"
              />
              <a href="#" className="hover:text-[#05b5fb] transition-colors">
                Terms of Service
              </a>
              <Separator
                orientation="vertical"
                className="hidden sm:block h-4 bg-gray-800"
              />
              <a href="#" className="hover:text-[#05b5fb] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Copyright */}
          <Separator className="my-8 bg-gray-900" />
          <div className="text-center text-sm text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} CryptoScores. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
