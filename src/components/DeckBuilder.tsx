"use server";

import { YugiCards } from "@/types";
import getCards from "../actions/getCards";
import ExtraDeck from "./ExtraDeck";
import MainDeck from "./MainDeck";
import SideDeck from "./SideDeck";

export default async function DeckBuilder() {
  const [mainCards, extraCards, sideCards] = await Promise.all([
    getCards("main") as Promise<YugiCards[]>,
    getCards("extra") as Promise<YugiCards[]>,
    getCards("side") as Promise<YugiCards[]>,
  ]);
  return (
    <div className="flex flex-col justify-between py-10">
      <MainDeck allCards={mainCards} />
      <ExtraDeck allCards={extraCards} />
      <SideDeck allCards={sideCards} />
    </div>
  );
}
