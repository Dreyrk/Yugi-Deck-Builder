"use client";

import { useState } from "react";
import { YugiCardProps } from "@/types";
import Image from "next/image";
import { BsCheck2Circle } from "react-icons/bs";

export default function YugiCard({ card }: YugiCardProps) {
  const [selected, setSelected] = useState(false);

  const selectCard = () => {
    setSelected(!selected);
    if (selected) {
    } else {
    }
  };

  return (
    <button onClick={selectCard} type="button" className="relative">
      <div
        className={`${
          !selected && "hidden"
        } absolute top-[40%] left-[37%] z-50`}>
        <BsCheck2Circle size={40} color="white" />
      </div>
      <Image
        className="lg:hover:scale-125 z-40"
        src={card.img ? card.img : "/cardBack.jpg"}
        alt="card"
        width={180}
        height={260}
      />
    </button>
  );
}
