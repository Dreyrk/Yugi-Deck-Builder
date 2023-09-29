import AnimatedText from "./components/AnimatedText";
import DeckBuilder from "./components/DeckBuilder";

export default function Home() {
  return (
    <>
      <AnimatedText text="Build your own Deck !" />
      <DeckBuilder />
    </>
  );
}
