import AddCard from "./AddCard";
import YugiCard from "./YugiCard";

const testArray = Array.from({ length: 40 });

const addCardToDeck = () => {};

export default function MainDeck() {
  return (
    <section className="bg-yellow-900 mx-6 my-4 rounded-md border-4 border-orange-950">
      <div className="grid grid-cols-4 lg:grid-cols-5 max-sm:grid-cols-2 place-items-center gap-6 p-4">
        {testArray.map((card, i) => (
          <YugiCard
            key={i}
            src="https://images.ygoprodeck.com/images/cards/6983839.jpg"
          />
        ))}
        <form action={addCardToDeck}>
          <AddCard />
        </form>
      </div>
    </section>
  );
}
