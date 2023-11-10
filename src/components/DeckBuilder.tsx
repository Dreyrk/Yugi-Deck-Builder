"use client";

import { Deck, YugiCards } from "@/types";
import ExtraDeck from "./ExtraDeck";
import MainDeck from "./MainDeck";
import SideDeck from "./SideDeck";
import useDeckContext from "@/app/context/DeckContext";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function DeckBuilder({
  mainCards,
  extraCards,
  sideCards,
}: {
  mainCards: YugiCards[];
  extraCards: YugiCards[];
  sideCards: YugiCards[];
}) {
  const { deck, setDeck } = useDeckContext();
  const { data: session } = useSession();

  const isDeckValid = (deck: Deck): boolean => {
    const { main, extra } = deck;

    const totalCards: number = main.length + extra.length;

    if (totalCards < 40 || totalCards > 60) {
      toast.warn("Deck must contain between 40 and 60 cards");
      return false;
    }

    if (extra.length > 15) {
      toast.warn("Extra Deck cannot contain more than 15 cards");
      return false;
    }

    return true;
  };

  const createDeck = async () => {
    if (session?.user.id) {
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
        console.error("deck is not valid");
      }
    } else {
      toast.warn("Please create an account to save decks");
    }
  };

  return (
    <div className="flex flex-col justify-between py-10 mx-8">
      <div className="w-fit px-4 flex flex-col gap-2">
        <label className="text-white" htmlFor="name">
          Deck Name :
        </label>
        <input
          className="py-1 px-2 rounded-lg placeholder:italic"
          type="text"
          id="name"
          value={deck.name}
          onChange={(e) => setDeck({ ...deck, name: e.target.value })}
          placeholder="Dark Magician, Control Deck..."
          autoComplete="off"
        />
      </div>
      <MainDeck allCards={mainCards} />
      <ExtraDeck allCards={extraCards} />
      <SideDeck allCards={sideCards} />
      <button
        onClick={createDeck}
        className="bg-yellow-300 text-slate-900 text-lg font-semibold px-4 py-2 w-fit rounded-lg hover:text-slate-100 self-center mt-8"
        type="button">
        Create
      </button>
    </div>
  );
}
