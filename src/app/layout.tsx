import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Funnel_Sans, Inter_Tight, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Krishin Parikh",
    default: "Krishin Parikh",
  },
  description: "Krishin Parikh's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${funnelSans.variable} ${interTight.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
