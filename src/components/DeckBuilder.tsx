"use client";

import { YugiCards } from "@/types";
import ExtraDeck from "./ExtraDeck";
import MainDeck from "./MainDeck";
import SideDeck from "./SideDeck";
import useDeckContext from "@/app/context/DeckContext";
import CreateDeckBtn from "./CreateDeckBtn";

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
      <CreateDeckBtn />
    </div>
  );
}
