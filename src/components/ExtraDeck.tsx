"use client";

import { useState } from "react";
import AddToDeckModal from "./AddToDeckModal";
import AddCardBtn from "./AddCardBtn";
import { DeckProps, YugiCards } from "@/types";
import YugiCard from "./YugiCard";

export default function ExtraDeck({ allCards }: DeckProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [deck, setDeck] = useState<YugiCards[]>([]);
  return (
    <section className="bg-violet-800 mx-8 my-4 rounded-md border-4 border-violet-950">
      <div className="grid grid-cols-4 lg:grid-cols-5 max-sm:grid-cols-2 place-items-center gap-6 p-4">
        {deck.map((card) => (
          <YugiCard card={card} key={card.id} />
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
