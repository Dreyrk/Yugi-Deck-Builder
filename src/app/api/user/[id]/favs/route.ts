import addCardToFav from "@/actions/addCardToFav";
import getUserFavs from "@/actions/getUserFavs";
import removeFavCard from "@/actions/removeFavCard";
import { YugiCards } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { card } = await req.json();
  try {
    const favs = await getUserFavs(id);

    const isFav =
      favs !== null ? favs.some((el: YugiCards) => el.id === card.id) : false;

    if (isFav) {
      await removeFavCard(id, card);
      return NextResponse.json(
        { message: "Unliked !", liked: false },
        { status: 201 }
      );
    } else {
      await addCardToFav(id, card);
      return NextResponse.json(
        { message: "Liked !", liked: true },
        { status: 201 }
      );
    }
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
