"use client";

import { Session } from "next-auth";
import AuthProvider from "./AuthProvider";
import DeckContextProvider from "./DeckProvider";

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <AuthProvider session={session}>
      <DeckContextProvider>{children}</DeckContextProvider>
    </AuthProvider>
  );
}
