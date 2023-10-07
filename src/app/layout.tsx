import "./globals.css";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Yugi Deck Builder",
  description: "Deck builder for yugioh",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="relative">
        <AuthProvider session={session}>
          <Navbar />
          <main className="overflow-hidden pt-28">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
