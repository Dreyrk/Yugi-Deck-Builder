"use client";

import { useSession } from "next-auth/react";
import useDeckContext from "@/app/context/DeckContext";
import isDeckValid from "@/utils/isDeckValid";

export default function CreateDeckBtn() {
  const { data: session, status } = useSession();
  const { deck } = useDeckContext();

  const createDeck = async () => {
    const isValid = isDeckValid(deck);
    if (isValid) {
      await fetch(`/api/user/${session?.user.id}/deck/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deck }),
      });
    } else {
      throw new Error("Deck is not valid");
    }
  };

  if (status === "authenticated") {
    return (
      <button
        onClick={createDeck}
        className="bg-yellow-300 text-slate-900 text-lg font-semibold px-4 py-2 w-fit rounded-lg hover:text-slate-100 self-center mt-8"
        type="button">
        Create
      </button>
    );
  } else {
    return (
      <p className="text-red-600 font-semibold text-lg self-center mt-10">
        Create an account for save your own decks
      </p>
    );
  }
}