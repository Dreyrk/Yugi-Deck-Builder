"use server";

import getDeck from "@/actions/getDeck";
import DeckDisplayer from "@/components/DeckDisplayer";
import getDeckLength from "@/utils/getDeckLength";

export default async function Page({
  params,
}: {
  params: { userId: string; deckId: string };
}) {
  const { userId, deckId } = params;

  const deck = await getDeck(userId, deckId);

  const deckLength = getDeckLength(deck);

  return (
    <div className="text-white">
      <h1 className="font-bold text-3xl">{deck.name}</h1>
      <p className="">Deck length: {deckLength}</p>
      <DeckDisplayer deck={deck} />
    </div>
  );
}
