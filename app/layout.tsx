import type { Metadata } from "next";
import { Cormorant, Josefin_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import AnimationInit from "@/components/providers/AnimationInit";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Passage Saint-Honoré — Bistrot Parisien",
  description: "Bistrot parisien au cœur de la Place du Marché Saint-Honoré. Brunch, terrasse, cuisine généreuse et espaces privatisables à Paris 1er.",
  openGraph: {
    title: "Le Passage Saint-Honoré",
    description: "Bistrot parisien · Brunch · Terrasse · Privatisation — Paris 1er",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${josefinSans.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[var(--color-bg)] text-[var(--color-text)]">
        <LenisProvider>
          <AnimationInit />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
