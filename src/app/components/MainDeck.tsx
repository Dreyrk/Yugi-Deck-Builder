import Image from "next/image";

const testArray = Array.from({ length: 40 });

export default function MainDeck() {
  console.log(testArray.length);
  return (
    <section>
      {testArray.map((card, i) => (
        <Image
          key={i}
          src="https://images.ygoprodeck.com/images/cards/6983839.jpg"
          alt="card"
          width={180}
          height={260}
        />
      ))}
    </section>
  );
}
