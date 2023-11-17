"use client";

import { useState } from "react";
import AddToDeckModal from "./AddToDeckModal";
import AddCardBtn from "./AddCardBtn";
import { DeckProps, YugiCards } from "@/types";
import YugiCard from "./YugiCard";
import useDeckContext from "@/app/context/DeckContext";

export default function ExtraDeck({ allCards }: DeckProps) {
  const { deck } = useDeckContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-violet-800 my-4 rounded-md border-4 border-violet-950">
      <div className="grid grid-cols-4 lg:grid-cols-5 max-sm:grid-cols-2 place-items-center gap-6 p-4">
        {deck.extra &&
          deck.extra.map((card: YugiCards, i: number) => (
            <YugiCard
              card={card}
              deckType="extra"
              inDeck={true}
              key={card.id + i}
            />
          ))}
        <AddCardBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <AddToDeckModal
          allCards={allCards}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          deckType="extra"
        />
      )}
    </section>
  );
}
