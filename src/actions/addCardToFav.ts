"use server";

import { connect } from "@/lib/dbConnection";
import Users from "@/models/usersModel";
import { YugiCards } from "@/types";
import { revalidatePath } from "next/cache";

async function addCardToFav(userId: string, card: YugiCards) {
  try {
    console.log(card);
    await connect();

    const currentUser = await Users.findById(userId).select("favs");

    await currentUser.favs.push(card);

    await currentUser.save();
  } catch (e: any) {
    throw new Error(`Failed to add card to fav : ${e.message}`);
  }
}

export default addCardToFav;
