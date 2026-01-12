import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Legal information */}
          <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900/30 p-6">
            <div className="flex items-start gap-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Legal information
                </h3>
                <p className="text-gray-400">
                  CryptoScores provides{' '}
                  <span className="font-semibold text-white">
                    educational information only
                  </span>
                  .
                </p>
                <p className="mt-1 text-gray-500">No investment advice.</p>
              </div>
            </div>
          </div>

          {/* Footer content */}
          <div className="flex flex-col items-center justify-between gap-6 text-gray-500 md:flex-row">
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

            <div className="flex flex-col items-center gap-6 text-sm sm:flex-row">
              <a
                href="https://www.linkedin.com/in/chantallang/"
                className="transition-colors hover:text-[#05b5fb]"
              >
                CryptoScores' Founder
              </a>
              <Separator
                orientation="vertical"
                className="hidden h-4 bg-gray-800 sm:block"
              />
              <a
                href="mailto:contact@cryptoscores.com"
                className="transition-colors hover:text-[#05b5fb]"
              >
                contact@cryptoscores.com
              </a>
              <Separator
                orientation="vertical"
                className="hidden h-4 bg-gray-800 sm:block"
              />
              <a
                href="/pdfs/CryptoScores Terms of Services V2511.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#05b5fb]"
              >
                Terms of Service
              </a>
              <Separator
                orientation="vertical"
                className="hidden h-4 bg-gray-800 sm:block"
              />
              <a
                href="/pdfs/CryptoScores Legal Notice V2511.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#05b5fb]"
              >
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
