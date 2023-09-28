"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") router.push("/authenticate");
  }, [status, router]);
  const logout = () => {
    signOut();
  };
  return (
    <div>
      <h1 className="">{session?.user.pseudo}</h1>
      <button className="" onClick={logout} type="button">
        Log Out
      </button>
    </div>
  );
}
