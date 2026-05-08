import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import AnimationInit from "@/components/providers/AnimationInit";
import Navbar from "@/components/layout/Navbar";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${cormorant.variable} ${josefinSans.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {/* Global SVG noise filter — referenced by all .noise elements */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
          aria-hidden="true"
        >
          <defs>
            <filter id="noise" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
            </filter>
          </defs>
        </svg>

        {/* Cursor marquee (Osmo Supply) */}
        <div data-cursor-marquee-status="" className="cursor-marquee">
          <div className="cursor-marquee__card">
            <span data-cursor-marquee-text-target="" className="cursor-marquee__text-span">Voir la galerie</span>
            <span data-cursor-marquee-text-target="" className="cursor-marquee__text-span is--duplicate">Voir la galerie</span>
          </div>
        </div>

        {/* Progressive blur bottom edge (Osmo Supply) */}
        <div className="progressive-blur" aria-hidden="true">
          <div className="progressive-blur__layer is--1"></div>
          <div className="progressive-blur__layer is--2"></div>
          <div className="progressive-blur__layer is--3"></div>
          <div className="progressive-blur__layer is--4"></div>
          <div className="progressive-blur__layer is--5"></div>
        </div>

        <LenisProvider>
          <Navbar />
          <AnimationInit />
          <div data-main style={{ position: "relative", zIndex: 2 }}>
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
