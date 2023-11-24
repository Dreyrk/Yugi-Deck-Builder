import createUserDeck from "@/actions/createUserDeck";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { deck } = await req.json();

  try {
    await createUserDeck(id, deck);
    return NextResponse.json(
      {
        message: "Deck created successfully",
      },
      { status: 201 }
    );
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
