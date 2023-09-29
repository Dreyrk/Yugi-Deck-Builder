import { YugiCards } from "@/types";
import Image from "next/image";

export default function YugiCard({ card }: { card: YugiCards }) {
  return <Image src={card.img} alt="card" width={180} height={260} />;
}
