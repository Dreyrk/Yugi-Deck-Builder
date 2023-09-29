"use server";

import getCards from "../actions/getCards";
import ExtraDeck from "./ExtraDeck";
import MainDeck from "./MainDeck";
import SideDeck from "./SideDeck";

export default async function DeckBuilder() {
  const mainCards = await getCards("main");
  const extraCards = await getCards("extra");
  const sideCards = await getCards("side");
  console.log(mainCards);
  return (
    <div className="flex flex-col justify-between py-10">
      <MainDeck allCards={mainCards} />
      <ExtraDeck allCards={extraCards} />
      <SideDeck allCards={sideCards} />
    </div>
  );
}
