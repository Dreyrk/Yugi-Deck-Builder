"use client";

import { useState } from "react";
import { YugiCardProps, YugiCards } from "@/types";
import Image from "next/image";
import { BsCheck2Circle } from "react-icons/bs";
import RemoveCardBtn from "./RemoveCardBtn";

export default function YugiCard({
  card,
  inDeck = false,
  deckType = "none",
  selectedCards,
  setSelectedCards,
}: YugiCardProps) {
  const isSelected = selectedCards?.some(
    (selectedCard) => selectedCard.id === card.id
  );
  const [selected, setSelected] = useState(isSelected);

  const selectCard = () => {
    if (setSelectedCards) {
      setSelected(!selected);
      if (selected) {
        setSelectedCards((prev: YugiCards[]) =>
          prev.filter((currentCard: YugiCards) => currentCard.id !== card.id)
        );
      } else {
        setSelectedCards((prev: YugiCards[]) => [...prev, card]);
      }
    }
  };

  return (
    <button
      onClick={selectCard}
      type="button"
      className="relative lg:hover:scale-125">
      {inDeck && <RemoveCardBtn deckType={deckType} cardId={card.id} />}
      <div
        className={`${
          !selected && "hidden"
        } absolute top-[40%] left-[37%] z-50`}>
        <BsCheck2Circle size={40} color="white" />
      </div>
      <Image
        className="z-40"
        src={card.img ? card.img : "/cardBack.jpg"}
        alt="card"
        width={180}
        height={260}
      />
    </button>
  );
}
