"use server";

import { connect } from "@/lib/dbConnection";
import Users from "@/models/usersModel";

async function getUserDecks(id: string) {
  await connect();
  const currentUser = await Users.findById(id).select("decks");
  if (currentUser.decks.length) {
    return currentUser.decks;
  } else {
    return { message: "no deck created yet" };
  }
}

export default getUserDecks;
