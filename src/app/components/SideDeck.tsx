"use client";

import { useState } from "react";
import AddCardBtn from "./AddCardBtn";
import AddToDeckModal from "./AddToDeckModal";

export default function SideDeck() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-green-700 mx-8 my-4 rounded-md border-4 border-teal-950">
      <div className="flex overflow-auto">
        <AddCardBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <AddToDeckModal isOpen={isOpen} setIsOpen={setIsOpen} deck="side" />
      )}
    </section>
  );
}
