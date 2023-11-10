import { Schema, model, models } from "mongoose";

export const CardSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  desc: { type: String },
  atk: { type: Number },
  def: { type: Number },
  type: { type: String },
  race: { type: String },
  attribute: { type: String },
  price: { type: Number },
  img: { type: String, required: true },
  deckType: { type: String },
});

const AllCardSchema = new Schema({
  main: [CardSchema],
  extra: [CardSchema],
  side: [CardSchema],
});

const Cards = models?.cards || model("cards", AllCardSchema);

export default Cards;
