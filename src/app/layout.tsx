import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoScores - Analyze any crypto in 10 seconds",
  description:
    "Spot opportunities. Avoid traps. Get instant analysis of 7,000+ cryptocurrencies directly inside Telegram.",
  openGraph: {
    title: "CryptoScores - Analyze any crypto in 10 seconds",
    description:
      "Spot opportunities. Avoid traps. Get instant analysis of 7,000+ cryptocurrencies directly inside Telegram.",
    url: "https://www.cryptoscores.com",
    siteName: "CryptoScores",
    images: [
      {
        url: "/images/cryptoScores-02.png",
        width: 1200,
        height: 630,
        alt: "CryptoScores Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoScores - Analyze any crypto in 10 seconds",
    description:
      "Spot opportunities. Avoid traps. Get instant analysis of 7,000+ cryptocurrencies directly inside Telegram.",
    images: ["/images/cryptoScores-02.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>{children}</NuqsAdapter>

        {/* X (Twitter) Ads Pixel */}
        <Script
          id="x-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','qfuhj');
              twq('event','tw-qfuhj-qfuhl');
            `,
          }}
        />

        {/* Hotjar */}
        <Script src="https://t.contentsquare.net/uxa/6029980009fdc.js"></Script>
      </body>
    </html>
  );
}
