import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "The Ladder Tech | Digital Marketing & Technical Solutions",
  description: "The Ladder Tech offers premium digital marketing and technical solutions to help brands climb to success. Expert strategies in AI, automation, and proven growth.",
  keywords: [
    "the ladder",
    "the ladder tech",
    "theladders.tech",
    "theladders tech",
    "digital marketing",
    "technical solutions",
    "web development",
    "business growth",
    "AI assistants",
    "automation solutions",
    "data analytics",
    "data warehousing",
    "software development",
    "website development",
    "enterprise solutions",
    "digital transformation",
    "marketing agency",
    "technical consulting"
  ],
  authors: [{ name: "The Ladder Tech" }],
  creator: "The Ladder Tech",
  publisher: "The Ladder Tech",
  icons: {
    icon: [
      { url: "/ladder-icon.svg", type: "image/svg+xml" }
    ],
    apple: "/ladder-icon.svg",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://www.theladders.tech"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.theladders.tech",
    siteName: "The Ladder Tech",
    title: "The Ladder Tech | Digital Marketing & Technical Solutions",
    description: "Premium digital marketing and technical solutions for business growth from The Ladder Tech.",
    images: [
      {
        url: "https://www.theladders.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Ladder Tech - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ladder Tech | Digital Marketing & Technical Solutions",
    description: "Premium digital marketing and technical solutions for business growth from The Ladder Tech.",
    creator: "@theladder",
    images: ["https://www.theladders.tech/twitter-image.png"],
  },
  alternates: {
    canonical: "https://www.theladders.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "The Ladder Tech",
                  "url": "https://www.theladders.tech",
                  "logo": "https://www.theladders.tech/ladder-icon.svg",
                  "description": "The Ladder Tech: Premium digital marketing and enterprise technical solutions for business growth.",
                  "sameAs": [
                    "https://twitter.com/theladder"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "",
                    "contactType": "customer service"
                  }
                },
                {
                  "@type": "WebSite",
                  "name": "The Ladder Tech",
                  "url": "https://www.theladders.tech",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.theladders.tech/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [];
}
