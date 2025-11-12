import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "In-Suite Structured Cabling by Sequoia Services | Kamloops, BC",
  description: "Professional CAT5e/6/6a/7, Coax & Fiber installations for residential and commercial units in Kamloops, BC. Certified testing, complete labeling, and test reports.",
  keywords: "structured cabling, network installation, Kamloops, CAT6, fiber optic, cable pulling, termination",
  authors: [{ name: "Sequoia Services" }],
  openGraph: {
    title: "In-Suite Structured Cabling by Sequoia Services",
    description: "Future-ready structured cabling with certified testing and complete labeling",
    type: "website",
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sequoia Services",
              alternateName: "In-Suite Structured Cabling by Sequoia Services",
              telephone: "250-574-7110",
              email: "FiberOptics@sequoiaservices.ca",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kamloops",
                addressRegion: "BC",
                addressCountry: "CA",
              },
              areaServed: {
                "@type": "City",
                name: "Kamloops",
              },
              serviceType: "Structured Cabling Installation",
            }),
          }}
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

