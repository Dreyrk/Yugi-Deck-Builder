"use server";

import getUserDecks from "@/actions/getUserDecks";
import { Deck } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const userDecks = await getUserDecks(id);

  return (
    <div>
      <h1>My Decks Page</h1>
      <ul>
        {userDecks &&
          userDecks.map((deck: Deck) => (
            <li className="text-white" key={deck._id}>
              {deck.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
