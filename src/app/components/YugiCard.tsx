import { YugiCards } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function YugiCard({ card }: { card: YugiCards }) {
  return (
    <Link href={`/cards/${card.id}`}>
      <Image
        className="hover:scale-125 z-40"
        src={card.img}
        alt="card"
        width={180}
        height={260}
      />
    </Link>
  );
}
