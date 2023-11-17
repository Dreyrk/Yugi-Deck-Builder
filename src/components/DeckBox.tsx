import { Deck } from "@/types";
import Image from "next/image";
import Link from "next/link";
import DeleteDeckBtn from "./DeleteDeckBtn";
import deleteUserDeck from "@/actions/deleteUserDeck";

export default function DeckBox({
  deck,
  params,
}: {
  deck: Deck;
  params: { userId: string };
}) {
  const { userId } = params;
  const deleteDeck = async () => {
    await deleteUserDeck(userId);
  };
  return (
    <Link className="relative" href={`${deck._id}`}>
      <DeleteDeckBtn deleteDeck={deleteDeck} />
      <div className="h-full w-60 bg-slate-200 flex flex-col items-center z-0">
        <Image
          src={deck.extra[0].img}
          alt="firstCard"
          width={1000}
          height={1000}
          blurDataURL={`${deck.extra[0].img}`}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 p-6 flex flex-col gap-4 bg-transparent backdrop-brightness-50 backdrop-blur-sm z-30">
          <h1 className="text-xl text-slate-100 font-semibold">{deck.name}</h1>
          <span className="text-slate-100 font-light text-xs">
            Deck length : {deck.main.length + deck.extra.length} cards
          </span>
        </div>
      </div>
    </Link>
  );
}
