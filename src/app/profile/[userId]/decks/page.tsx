"use server";

import getUserDecks from "@/actions/getUserDecks";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DeckBox from "@/components/DeckBox";
import { Deck } from "@/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { userId: string } }) {
  const session = await getServerSession(authOptions);
  const { userId } = params;
  const userDecks = await getUserDecks(userId);

  if (session?.user.id === userId) {
    return (
      <div className="px-8">
        <h1 className="text-3xl font-semibold text-slate-100 underline">
          Decks :
        </h1>
        {userDecks.length ? (
          <ul className="flex flex-wrap gap-10 my-10  max-sm:justify-center">
            {userDecks.map((deck: Deck) => (
              <DeckBox userId={userId} deck={deck} key={deck.id} />
            ))}
          </ul>
        ) : (
          <div className="grid place-content-center h-40">
            <h1 className="text-xl text-white">No Decks</h1>
          </div>
        )}
      </div>
    );
  } else {
    redirect("/authenticate");
  }
}
