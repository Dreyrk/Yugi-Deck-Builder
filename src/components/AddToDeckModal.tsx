"use client";

import { useState } from "react";
import { AddToDeckModalProps } from "@/types";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import YugiCard from "./YugiCard";
import useDeckContext from "@/app/context/DeckContext";

export default function AddToDeckModal({
  setIsOpen,
  deckType,
  allCards,
}: AddToDeckModalProps) {
  const { deck, setDeck } = useDeckContext();
  const [selectedCards, setSelectedCards] = useState([]);
  const closeModal = () => {
    setIsOpen(false);
  };

  const addToDeck = () => {
    switch (deckType) {
      case "main":
        setDeck({ ...deck, main: [...deck.main, ...selectedCards] });

      case "extra":
        setDeck({ ...deck, extra: [...deck.extra, ...selectedCards] });

      case "side":
        setDeck({ ...deck, side: [...deck.side, ...selectedCards] });

      default:
        console.error("no deck type");
        break;
    }
    console.log(deckType, selectedCards, deck.main);
    setIsOpen(false);
    setSelectedCards([]);
  };

  return (
    <motion.dialog
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal-overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-stone-200 w-[92vw] h-[75vh] lg:w-[40vw] p-4 flex flex-col justify-between rounded-sm shadow-lg z-50">
        <button className="max-w-[35px]" onClick={closeModal} type="button">
          <AiOutlineCloseCircle color="black" size={30} />
        </button>
        <div className="flex justify-between">
          <p className="text-2xl px-4 text-black">
            <span
              style={{ color: `var(--deck-${deckType})` }}
              className={`mx-1 capitalize`}>
              {deckType}
            </span>
            Deck :
          </p>
          <button type="button" onClick={addToDeck}>
            <AiFillCheckCircle size={40} color="#a5be00" />
          </button>
        </div>
        <div className="h-5/6 w-full p-2">
          <ul
            className={`z-30 h-full w-full overflow-y-auto overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 place-items-center scrollbar-${deckType}`}>
            {allCards &&
              allCards.map((card) => (
                <li key={card.id} className="m-2">
                  <YugiCard setSelectedCards={setSelectedCards} card={card} />
                </li>
              ))}
          </ul>
        </div>
      </motion.div>
    </motion.dialog>
  );
}
