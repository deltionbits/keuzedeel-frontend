import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coole game webshop",
  description: "De beste game webshop van Nederland",
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
