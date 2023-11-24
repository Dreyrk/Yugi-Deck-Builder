import { Deck, YugiCards } from "@/types";
import StaticYugiCard from "./StaticYugiCard";

export default function DeckDisplayer({ deck }: { deck: Deck }) {
  return (
    <div className="">
      <section className="main-deck">
        <div className="deck-display">
          {deck.main &&
            deck.main.map((card: YugiCards, i: number) => (
              <StaticYugiCard card={card} key={card.id + i} />
            ))}
        </div>
      </section>
      <section className="extra-deck">
        <div className="deck-display">
          {deck.extra &&
            deck.extra.map((card: YugiCards, i: number) => (
              <StaticYugiCard card={card} key={card.id + i} />
            ))}
        </div>
      </section>
      <section className="side-deck">
        <div className="deck-display">
          {deck.side &&
            deck.side.map((card: YugiCards, i: number) => (
              <StaticYugiCard card={card} key={card.id + i} />
            ))}
        </div>
      </section>
    </div>
  );
}
