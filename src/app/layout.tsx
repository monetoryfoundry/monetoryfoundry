import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { metadataContent } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: metadataContent.title,
    template: "%s · Monetary Foundry",
  },
  description: metadataContent.description,
  metadataBase: new URL("https://monetoryfoundry.com"),
  openGraph: {
    title: metadataContent.title,
    description: metadataContent.description,
    siteName: "Monetary Foundry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataContent.title,
    description: metadataContent.description,
  },
  icons: { icon: "/favicon.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
