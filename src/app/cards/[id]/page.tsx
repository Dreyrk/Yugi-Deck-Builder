"use server";

import getCardsById from "@/actions/getCardById";
import getUserFavs from "@/actions/getUserFavs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AnimatedText from "@/components/AnimatedText";
import DetailsDisplay from "@/components/DetailsDisplay";
import AnimatedYugiCard from "@/components/cards/AnimatedYugiCard";
import { YugiCards } from "@/types";
import { getServerSession } from "next-auth";

export default async function Page({ params }: { params: { id: string } }) {
  const card = (await getCardsById(params.id)) as YugiCards;
  const session = await getServerSession(authOptions);
  const favs = await getUserFavs(session?.user.id);

  const isFav =
    favs !== null ? favs.some((el: YugiCards) => el.id === card.id) : false;

  return (
    <div className="grid grid-cols-8 gap-8 py-6 max-lg:flex max-lg:flex-col max-lg:gap-6">
      <AnimatedText style="col-span-full" text={card.name} />
      <AnimatedYugiCard style="col-start-2 max-lg:self-center" card={card} />
      <DetailsDisplay session={session} isFav={isFav} card={card} />
    </div>
  );
}
