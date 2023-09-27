"use client";

import { useState } from "react";
import AddToDeckModal from "./AddToDeckModal";
import AddCardBtn from "./AddCardBtn";

export default function ExtraDeck() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-violet-800 mx-8 my-4 rounded-md border-4 border-violet-950">
      <div className="flex overflow-auto">
        <AddCardBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <AddToDeckModal isOpen={isOpen} setIsOpen={setIsOpen} deck="extra" />
      )}
    </section>
  );
}
