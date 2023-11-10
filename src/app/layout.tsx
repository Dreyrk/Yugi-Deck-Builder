import "./globals.css";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { DeckContextProvider } from "./context/DeckContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
        <AuthProvider session={session}>
          <DeckContextProvider>
            <Navbar userId={session?.user.id} />
            <main className="overflow-hidden pt-28">{children}</main>
            <Footer />
          </DeckContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
