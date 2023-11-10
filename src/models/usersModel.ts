import { Schema, model, models } from "mongoose";
import { CardSchema } from "./cardsModel";

const DeckSchema = new Schema(
  {
    name: { type: String, required: true, default: "NoName" },
    main: [CardSchema],
    extra: [CardSchema],
    side: [CardSchema],
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
  {
    pseudo: {
      type: String,
      required: [true, "Please provide a pseudo"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    decks: [DeckSchema],
  },
  {
    timestamps: true,
  }
);

const Users = models.users || model("users", userSchema);

export default Users;
