"use server";

import { connect } from "@/lib/dbConnection";
import Users from "@/models/usersModel";
import { Deck } from "@/types";

async function createUserDeck(id: string, deck: Deck) {
  try {
    connect();

    const currentUser = await Users.findById(id);

    currentUser.decks.push(deck);

    await currentUser.save();
  } catch (e: any) {
    throw new Error(`failed to create deck ${e.message}`);
  }
}

export default createUserDeck;
