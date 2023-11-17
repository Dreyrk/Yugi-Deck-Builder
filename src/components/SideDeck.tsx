"use client";

import { useState } from "react";
import AddCardBtn from "./AddCardBtn";
import AddToDeckModal from "./AddToDeckModal";
import { DeckProps, YugiCards } from "@/types";
import YugiCard from "./YugiCard";
import useDeckContext from "@/app/context/DeckContext";

export default function SideDeck({ allCards }: DeckProps) {
  const { deck } = useDeckContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-green-700 my-4 rounded-md border-4 border-teal-950">
      <div className="grid grid-cols-4 lg:grid-cols-5 max-sm:grid-cols-2 place-items-center gap-6 p-4">
        {deck.side &&
          deck.side.map((card: YugiCards, i: number) => (
            <YugiCard
              card={card}
              deckType="side"
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
          deckType="side"
        />
      )}
    </section>
  );
}
