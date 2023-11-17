"use server";

import getUserDecks from "@/actions/getUserDecks";
import DeckBox from "@/components/DeckBox";
import { Deck } from "@/types";

export default async function Page({ params }: { params: { userId: string } }) {
  const { userId } = params;
  const userDecks = await getUserDecks(userId);

  return (
    <div className="px-8">
      <h1 className="text-3xl font-semibold text-slate-100 underline">
        Decks :
      </h1>
      <ul className="flex flex-wrap gap-10 my-10  max-sm:justify-center">
        {userDecks &&
          userDecks.map((deck: Deck) => <DeckBox deck={deck} key={deck._id} />)}
      </ul>
    </div>
  );
}
