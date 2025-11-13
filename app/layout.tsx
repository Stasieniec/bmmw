import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BMMW Films - Niezależne Studio Filmowe",
  description: "BMMW to warszawskie niezależne studio filmowe, które zajmuje się produkcją dokumentów i filmów fabularnych. Lubimy prawdziwe historie, w których prawda nas zaskakuje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
