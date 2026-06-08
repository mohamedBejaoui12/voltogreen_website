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
    default: "Voltogreen – Énergie Solaire en Tunisie",
    template: "%s | Voltogreen",
  },
  description:
    "Voltogreen est votre partenaire de confiance pour l'installation de panneaux solaires en Tunisie. Solutions photovoltaïques résidentielles, commerciales et industrielles.",
  keywords: [
    "panneau solaire Tunisie",
    "installation solaire",
    "énergie photovoltaïque",
    "Voltogreen",
    "énergie renouvelable Tunisie",
    "indépendance énergétique",
  ],
  authors: [{ name: "Voltogreen" }],
  creator: "Voltogreen",
  metadataBase: new URL("https://voltogreen.tn"),
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://voltogreen.tn",
    siteName: "Voltogreen",
    title: "Voltogreen – Énergie Solaire en Tunisie",
    description:
      "Solutions solaires clé en main pour particuliers, entreprises et agriculteurs en Tunisie.",
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
      className={`${geistSans.variable} ${lalezar.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
