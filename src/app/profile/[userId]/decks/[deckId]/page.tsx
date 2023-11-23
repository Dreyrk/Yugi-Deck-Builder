import getDeck from "@/actions/getDeck";
import DeckDisplayer from "@/components/DeckDisplayer";
import { Deck } from "@/types";

export default async function Page({
  params,
}: {
  params: { userId: string; deckId: string };
}) {
  const { userId, deckId } = params;
  const deck: Deck = await getDeck(userId, deckId);
  return (
    <div>
      <DeckDisplayer deck={deck} />
    </div>
  );
}
