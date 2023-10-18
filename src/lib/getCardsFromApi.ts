import Cards from "../models/cardsModel";
import getCards from "../actions/getCards";
import { connect } from "./dbConnection";

async function getCardsFromApi() {
  try {
    const main = await getCards("main");
    const extra = await getCards("extra");
    const side = await getCards("side");

    await connect();

    await Cards.create({ main, extra, side });

    console.log("Created Successfully");
  } catch (e: any) {
    console.error(e.message);
  }
}
