"use server";

import getCardsById from "@/actions/getCardById";
import AnimatedText from "@/components/AnimatedText";
import AnimatedYugiCard from "@/components/cards/AnimatedYugiCard";
import { YugiCards } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const card = (await getCardsById(params.id)) as YugiCards;
  return (
    <div className="grid grid-cols-8 gap-8 py-6 max-lg:flex max-lg:flex-col">
      <AnimatedText style="col-span-full" text={card.name} />
      <AnimatedYugiCard style="col-start-2" card={card} />
      <ul className="col-start-5 col-span-3 text-slate-200 bg-neutral-800 p-6 rounded-lg flex flex-wrap justify-evenly">
        <li className="">
          ATK : <span className="font-semibold text-xl">{card.atk}</span>
        </li>
        <li className="col-start-3">
          DEF : <span className="font-semibold text-xl">{card.def}</span>
        </li>
      </ul>
    </div>
  );
}
