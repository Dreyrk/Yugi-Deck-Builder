"use client";

import { useState } from "react";
import AddCardBtn from "./AddCardBtn";
import YugiCard from "./YugiCard";
import AddToDeckModal from "./AddToDeckModal";

const testArray = Array.from({ length: 40 });

export default function MainDeck() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-yellow-900 mx-8 my-4 rounded-md border-4 border-orange-950">
      <div className="grid grid-cols-4 lg:grid-cols-5 max-sm:grid-cols-2 place-items-center gap-6 p-4">
        {testArray.map((card, i) => (
          <YugiCard
            key={i}
            src="https://images.ygoprodeck.com/images/cards/6983839.jpg"
          />
        ))}
        <AddCardBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <AddToDeckModal isOpen={isOpen} setIsOpen={setIsOpen} deck="main" />
      )}
    </section>
  );
}
