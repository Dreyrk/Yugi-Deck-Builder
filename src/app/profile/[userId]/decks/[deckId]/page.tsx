import deleteUserDeck from "@/actions/deleteUserDeck";
import getDeck from "@/actions/getDeck";
import DeleteDeckBtn from "@/components/DeleteDeckBtn";
import EditDeckBtn from "@/components/buttons/EditDeckBtn";
import DeckDisplayer from "@/components/deck/DeckDisplayer";
import getDeckLength from "@/utils/getDeckLength";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { userId: string; deckId: string };
}) {
  const { userId, deckId } = params;

  const deck = await getDeck(userId, deckId);

  const deleteDeck = async () => {
    "use server";
    await deleteUserDeck(userId, deckId);
    redirect(`/profile/${userId}/decks`);
  };

  const deckLength = getDeckLength(deck);

  return (
    <div className="text-white pt-8">
      <div className="flex flex-wrap px-6">
        <h1 className="font-bold text-3xl basis-1/2">{deck.name}</h1>
        <form action={deleteDeck} className="basis-1/2 flex justify-end">
          <EditDeckBtn type="button" />
          <DeleteDeckBtn type="submit" />
        </form>
        <p className="shrink">Deck length: {deckLength}</p>
      </div>
      <DeckDisplayer deck={deck} />
    </div>
  );
}
