"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
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
    <div className="p-8 flex flex-col gap-10 items-center">
      <h1 className="text-slate-200 text-3xl text-center">
        Welcome{" "}
        <span className="font-bold text-white">{session?.user.pseudo}</span> !
      </h1>
      <p className="text-white font-light text-sm">{session?.user.email}</p>
      <div className="flex gap-12">
        <Link
          className="text-lg font-semibold py-2 px-4 text-center bg-neutral-800 rounded-lg text-slate-200 shadow-sm shadow-neutral-600 hover:scale-95"
          href={`/profile/${session?.user.id}/decks`}>
          My Decks
        </Link>
        <Link
          className="text-lg font-semibold py-2 px-4 text-center bg-neutral-800 rounded-lg text-slate-200 shadow-sm shadow-neutral-600 hover:scale-95"
          href={`/profile/${session?.user.id}/settings`}>
          Settings
        </Link>
      </div>
      <button
        className="text-white font-semibold bg-red-600 p-3 rounded-xl hover:scale-95 hover:text-slate-200"
        onClick={logout}
        type="button">
        Log Out
      </button>
    </div>
  );
}
