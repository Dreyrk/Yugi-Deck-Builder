"use server";

import { connect } from "@/lib/dbConnection";
import Users from "@/models/usersModel";
import { Deck } from "@/types";

async function deleteUserDeck(userId: string, deckId: string) {
  try {
    await connect();
    const currentUser = await Users.findById(userId);

    currentUser.decks = currentUser.decks.filter(
      (deck: Deck) => deck._id !== deckId
    );

    await currentUser.save();
  } catch (e: any) {
    throw new Error(`Cannot delete ${userId} deck (${deckId})`);
  }
}

export default deleteUserDeck;
