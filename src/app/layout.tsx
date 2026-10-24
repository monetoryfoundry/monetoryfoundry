import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { company } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: company.title,
    template: "%s · Monetary Foundry",
  },
  description: company.description,
  metadataBase: new URL("https://monetaryfoundry.com"),
  openGraph: {
    title: company.title,
    description: company.description,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.title,
    description: company.description,
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
