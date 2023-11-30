"use server";

import getCardsById from "@/actions/getCardById";
import AnimatedYugiCard from "@/components/cards/AnimatedYugiCard";
import { YugiCards } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const card = (await getCardsById(params.id)) as YugiCards;
  return (
    <div className="flex flex-col place-items-center gap-8 py-6">
      <h1 className="text-white">{card?.name}</h1>
      <div>
        <AnimatedYugiCard card={card} />
      </div>
    </div>
  );
}
