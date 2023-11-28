"use server";

import getCardsById from "@/actions/getCardById";
import AnimatedYugiCard from "@/components/cards/AnimatedYugiCard";
import { YugiCards } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const card = (await getCardsById(params.id)) as YugiCards;
  return (
    <div>
      <h1 className="text-white">{card?.name}</h1>
      <div className="px-10 flex gap-8 flex-wrap">
        <AnimatedYugiCard card={card} />
      </div>
    </div>
  );
}
