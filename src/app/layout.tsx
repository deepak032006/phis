import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HiPhone } from "react-icons/hi";
import Link from "next/link";

import { Space_Grotesk, Inter, Urbanist, Sora,Poppins } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });
export const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
export const poppins = Poppins({ subsets: ['latin'], weight: '400', variable: '--font-poppins' });



export const metadata: Metadata = {
  title: {
    default: "Phish Defense - phishdefense.com",
    template: "%s - phishdefense.com",
  },
  description:
    "Phish Defense trains your team to detect phishing threats fast with real-world simulations, 10-min security lessons, and behavior-based insights.",
  keywords: ["phishing attacks", "security lessons", "cyber habits"],
  openGraph: {
    title: "Phish Defense - phishdefense.com",
    description:
      "Train your team with phishing simulations and real-world security insights.",
    url: "https://phishdefense.com",
    siteName: "Phish Defense",
    images: [
      {
        url: "/logo.gif", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Phish Defense",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phish Defense - phishdefense.com",
    description:
      "Train your team with phishing simulations and real-world security insights.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${poppins.variable}`}>
      <body className={spaceGrotesk.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Link
          href="/contact"
          className="fixed bottom-24 right-6 flex items-center gap-2 bg-gradient-to-r from-teal-300 to-green-300 hover:from-teal-400 hover:to-green-400 text-white px-4 py-2 pr-5 rounded-full shadow-lg hover:scale-105 transition-transform z-50 group"
          title="Contact Us"
        >
          <div className="p-2 bg-white/20 rounded-full">
            <HiPhone size={24} className="text-white" />
          </div>
          <span className="font-semibold hidden md:inline text-white tracking-wide group-hover:underline">
            Contact Us
          </span>
        </Link>
        <Footer />
      </body>
    </html>
  );
}
