"use server";

import getCardsById from "@/actions/getCardById";

export default async function Page({ params }: { params: { id: string } }) {
  const card = await getCardsById(params.id);
  return (
    <div>
      <h1 className="text-white">{card?.name}</h1>
    </div>
  );
}
