import ExtraDeck from "./ExtraDeck";
import MainDeck from "./MainDeck";
import SideDeck from "./SideDeck";

export default function DeckBuilder() {
  return (
    <div className="flex flex-col justify-between py-10">
      <h1 className="text-4xl text-center font-bold">Build your own Deck !</h1>
      <MainDeck />
      <ExtraDeck />
      <SideDeck />
    </div>
  );
}
