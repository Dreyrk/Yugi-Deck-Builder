"use server";

import getCards from "../actions/getCards";
import AnimatedText from "@/components/AnimatedText";
import DeckBuilder from "@/components/deck/DeckBuilder";
import { YugiCards } from "@/types";

export default async function Home() {
  const [mainCards, extraCards, sideCards] = await Promise.all([
    getCards("main") as Promise<YugiCards[]>,
    getCards("extra") as Promise<YugiCards[]>,
    getCards("side") as Promise<YugiCards[]>,
  ]);

  return (
    <main>
      <AnimatedText text="Build your own Deck !" />
      <DeckBuilder
        mainCards={mainCards}
        extraCards={extraCards}
        sideCards={sideCards}
      />
    </main>
  );
}
