"use client";

import { useState } from "react";
import AddCard from "./AddCard";
import AddToDeckModal from "./AddToDeckModal";

export default function SideDeck() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-green-700 mx-8 my-4 rounded-md border-4 border-teal-950">
      <div className="flex overflow-auto">
        <AddCard isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <AddToDeckModal />
    </section>
  );
}
