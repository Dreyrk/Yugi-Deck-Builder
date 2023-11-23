"use server";

import { connect } from "@/lib/dbConnection";
import Users from "@/models/usersModel";
import { Deck } from "@/types";

async function getDeck(userId: string, deckId: string): Deck {
  try {
    await connect();
    const currentUserDeck = await Users.findById(userId)
      .select({
        decks: { $elemMatch: { _id: deckId } },
      })
      .lean();

    console.log(currentUserDeck);
  } catch (e: any) {
    throw new Error(`failed to get deck ${deckId} : ${e.message}`);
  }
}

export default getDeck;
