import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoIntro from "@/components/VideoIntro";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bmmwfilms.com'),
  title: {
    default: "BMMW Films - Niezależne Studio Filmowe",
    template: "%s | BMMW Films",
  },
  description: "BMMW to warszawskie niezależne studio filmowe, które zajmuje się produkcją dokumentów i filmów fabularnych. Lubimy prawdziwe historie, w których prawda nas zaskakuje.",
  keywords: ["BMMW", "studio filmowe", "dokumenty", "filmy dokumentalne", "produkcja filmowa", "Warszawa", "Liroy", "Fenomen", "Jurek Owsiak", "polska produkcja"],
  authors: [{ name: "BMMW Films" }],
  creator: "BMMW Films",
  publisher: "BMMW Films",
  applicationName: "BMMW Films",
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'entertainment',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BMMW Films - Niezależne Studio Filmowe",
    description: "BMMW to warszawskie niezależne studio filmowe. Believe, Make Movies, Win. Produkcja dokumentów i filmów fabularnych.",
    url: 'https://bmmwfilms.com',
    siteName: 'BMMW Films',
    images: [
      {
        url: '/BMMW_logo_white_transparent.png',
        width: 1200,
        height: 630,
        alt: 'BMMW Films Logo',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BMMW Films - Niezależne Studio Filmowe",
    description: "BMMW to warszawskie niezależne studio filmowe. Believe, Make Movies, Win.",
    images: ['/BMMW_logo_white_transparent.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/BMMW_black_transparent.png', type: 'image/png' },
    ],
    apple: [
      { url: '/BMMW_black_transparent.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BMMW Films',
    description: 'Warszawskie niezależne studio filmowe zajmujące się produkcją dokumentów i filmów fabularnych',
    url: 'https://bmmwfilms.com',
    logo: 'https://bmmwfilms.com/BMMW_logo_white_transparent.png',
    slogan: 'Believe, Make Movies, Win',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warszawa',
      addressCountry: 'PL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'kontakt@bmmw.pl',
      contactType: 'General Inquiries',
    },
    sameAs: [],
    founder: [
      {
        '@type': 'Person',
        name: 'Małgorzata Kowalczyk',
        jobTitle: 'CEO & Executive Producer',
      },
    ],
  };

  return (
    <html lang="pl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <VideoIntro />
        <Navigation />
        <main className="flex-1 pt-[56px] md:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
