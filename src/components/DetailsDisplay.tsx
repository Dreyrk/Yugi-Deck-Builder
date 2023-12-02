"use client";

import { YugiCards } from "@/types";
import FavoriteBtn from "@/components/buttons/FavoriteBtn";

export default function DetailsDisplay({ card }: { card: YugiCards }) {
  const addFavorite = async () => {
    console.log("added to fav");
  };
  const removeFavorite = async () => {
    console.log("remove to fav");
  };

  return (
    <ul className="col-start-5 col-span-3 text-slate-200 bg-neutral-800 p-6 rounded-lg flex flex-wrap justify-evenly max-lg:gap-y-6">
      <h2 className="text-2xl text-center basis-full underline h-12">
        Details
      </h2>
      <li className="details-item">
        ATK : <span className="font-semibold text-xl">{card.atk}</span>
      </li>
      <li className="details-item">
        DEF : <span className="font-semibold text-xl">{card.def}</span>
      </li>
      <li className="details-item">
        Level : <span className="font-semibold text-xl">{card.level}</span>
      </li>
      <li className="details-item">
        Attribute :
        <span className="font-semibold text-xl mx-1">{card.attribute}</span>
      </li>
      <li className="basis-full p-2 overflow-hidden">
        [
        <span className="font-semibold mx-1">
          {card.race} / {card.type}
        </span>
        ]
        <p className="my-1 leading-tight overflow-auto max-h-40 max-w-full">
          {card.desc}
        </p>
      </li>
      <li className="details-item">
        Price :<span className="font-semibold text-xl mx-1">${card.price}</span>
      </li>
      <li className="details-item">
        <FavoriteBtn
          like={addFavorite}
          unlike={removeFavorite}
          color={"#ffee32"}
        />
      </li>
    </ul>
  );
}
