import { Schema, model, models } from "mongoose";

const CardSchema = new Schema({
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
});

const DeckSchema = new Schema(
  {
    name: { type: String, required: true },
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
