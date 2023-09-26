import AddCard from "./AddCard";

export default function ExtraDeck() {
  return (
    <section className="bg-yellow-900 mx-6 my-4 rounded-md border-4 border-orange-950">
      <div className="flex overflow-auto">
        <form action="">
          <AddCard />
        </form>
      </div>
    </section>
  );
}
