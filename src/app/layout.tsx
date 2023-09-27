import "./globals.css";
import type { Metadata } from "next";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Yugi Deck Builder",
  description: "Deck builder for yugioh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main className="overflow-hidden pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
