import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Coole Game Webshop - Dé Gamewinkel van Nederland",
    template: "%s | Coole Game Webshop"
  },
  description: "Dé ultieme bestemming voor gamers in Nederland. Ontdek het beste assortiment games, consoles en gaming-accessoires.",
  applicationName: "Coole Game Webshop",
  keywords: [
    "games", 
    "gaming", 
    "webshop", 
    "Nederland", 
    "game kopen", 
    "online game winkel"
  ],
  authors: [{ name: "Boxed Games" }],
  creator: "Boxed Games",
  publisher: "Aymen Ebrahim",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.boxedgames.nl",
    title: "Coole Game Webshop - Dé Gamewinkel van Nederland",
    description: "Dé ultieme bestemming voor gamers in Nederland. Ontdek het beste assortiment games, consoles en gaming-accessoires.",
    siteName: "Coole Game Webshop",
  },
  twitter: {
    title: "Coole Game Webshop - Dé Gamewinkel van Nederland",
    description: "Dé ultieme bestemming voor gamers in Nederland. Ontdek het beste assortiment games, consoles en gaming-accessoires.",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
