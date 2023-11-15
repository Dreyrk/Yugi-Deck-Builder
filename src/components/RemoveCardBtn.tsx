"use client";

import useDeckContext from "@/app/context/DeckContext";
import { YugiCards } from "@/types";
import { FaMinusCircle } from "react-icons/fa";

export default function RemoveCardBtn({
  cardId,
  deckType,
}: {
  cardId: number;
  deckType: string;
}) {
  const { deck, setDeck } = useDeckContext();

  const removeCard = () => {
    if (deckType !== "none") {
      const newDeck = deck[deckType].filter(
        (card: YugiCards) => card.id !== cardId
      );

      setDeck(newDeck);
    } else {
      console.error("no deck type in remove btn");
    }
  };

  return (
    <button
      onClick={removeCard}
      className="absolute top-1 right-3"
      type="button">
      <FaMinusCircle size={30} color="#bf0603" />
    </button>
  );
}
