import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chapaa.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chapaa · Save together, the Tanzanian way",
  description:
    "Chapaa is a savings and goals app for Tanzania. Save alone or with your chama, top up with M-Pesa, Airtel Money, Mixx by Yas or HaloPesa, and withdraw to any bank.",
  keywords: ["Chapaa", "savings app", "Tanzania", "chama", "group savings", "M-Pesa", "goals"],
  openGraph: {
    title: "Chapaa · Save together, the Tanzanian way",
    description:
      "Set a goal, top up from your phone, save with your people. Funds held by a licensed partner bank.",
    url: siteUrl,
    siteName: "Chapaa",
    images: [{ url: "/logo.png", width: 549, height: 154, alt: "Chapaa" }],
    locale: "en_TZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1430" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
