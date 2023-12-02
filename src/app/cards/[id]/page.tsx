"use server";

import getCardsById from "@/actions/getCardById";
import AnimatedText from "@/components/AnimatedText";
import DetailsDisplay from "@/components/DetailsDisplay";
import AnimatedYugiCard from "@/components/cards/AnimatedYugiCard";
import { YugiCards } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const card = (await getCardsById(params.id)) as YugiCards;

  return (
    <div className="grid grid-cols-8 gap-8 py-6 max-lg:flex max-lg:flex-col max-lg:gap-6">
      <AnimatedText style="col-span-full" text={card.name} />
      <AnimatedYugiCard style="col-start-2 max-lg:self-center" card={card} />
      <DetailsDisplay card={card} />
    </div>
  );
}
