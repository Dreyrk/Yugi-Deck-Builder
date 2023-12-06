import deleteUserDeck from "@/actions/deleteUserDeck";
import getDeck from "@/actions/getDeck";
import DeckDisplayer from "@/components/deck/DeckDisplayer";
import getDeckLength from "@/utils/getDeckLength";
import { redirect } from "next/navigation";
import { FaTrashCan } from "react-icons/fa6";

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
    <div className="text-white">
      <div className="flex flex-wrap px-6">
        <h1 className="font-bold text-3xl basis-1/2">{deck.name}</h1>
        <form action={deleteDeck} className="basis-1/2 flex justify-end">
          <button className="p-4 backdrop-blur rounded-full" type="submit">
            <FaTrashCan size={40} color={"#D00000"} />
          </button>
        </form>
        <p className="shrink">Deck length: {deckLength}</p>
      </div>
      <DeckDisplayer deck={deck} />
    </div>
  );
}
