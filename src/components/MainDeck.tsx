"use client";

import { useState } from "react";
import AddCardBtn from "./AddCardBtn";
import AddToDeckModal from "./AddToDeckModal";
import { DeckProps, YugiCards } from "@/types";
import YugiCard from "./YugiCard";
import useDeckContext from "@/app/context/DeckContext";

export default function MainDeck({ allCards }: DeckProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { deck } = useDeckContext();
  return (
    <section className="bg-yellow-900 my-4 rounded-md border-4 border-orange-950">
      <div className="grid grid-cols-4 lg:grid-cols-5 max-sm:grid-cols-2 place-items-center gap-6 p-4">
        {deck.main &&
          deck.main.map((card: YugiCards, i: number) => (
            <YugiCard
              deckType="main"
              inDeck={true}
              card={card}
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
          deckType="main"
        />
      )}
    </section>
  );
}
