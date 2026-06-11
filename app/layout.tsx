import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lalezar } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Voltogreen – Installation Solaire en Tunisie | 150+ Projets Réalisés",
    template: "%s | Voltogreen",
  },
  description:
    "Voltogreen : votre expert en installation de panneaux solaires en Tunisie. 150+ projets réalisés, 750 kW installés. Garantie 25 ans panneaux, 10 ans onduleurs. Maintenance gratuite 1ère année. Support 24/7. Cité Gouabsia, Mnihla, Tunis.",
  keywords: [
    "panneau solaire Tunisie",
    "installation solaire Tunisie",
    "énergie photovoltaïque",
    "Voltogreen",
    "énergie renouvelable Tunisie",
    "indépendance STEG",
    "financement solaire Tunisie",
    "maintenance panneaux solaires",
    "garantie panneau solaire 25 ans",
    "SAV solaire Tunisie",
    "installation solaire Mnihla",
    "devis solaire gratuit Tunisie",
  ],
  authors: [{ name: "Voltogreen" }],
  creator: "Voltogreen",
  metadataBase: new URL("https://voltogreen.tn"),
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://voltogreen.tn",
    siteName: "Voltogreen",
    title: "Voltogreen – Installation Solaire en Tunisie | 150+ Projets",
    description:
      "150+ projets réalisés, 750 kW installés, 3 ans d'expérience. Garantie 25 ans panneaux, maintenance gratuite 1ère année. Solutions clé en main pour particuliers et entreprises.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${lalezar.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <form name="contact" data-netlify="true" hidden>
          <input name="nom" />
          <input name="prenom" />
          <input name="telephone" />
          <input name="adresse" />
          <input name="typeInstallation" />
          <textarea name="message"></textarea>
        </form>
        {children}
        <a href="https://wa.me/21655062167" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform duration-300" aria-label="Contactez-nous sur WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
      </body>
    </html>
  );
}
