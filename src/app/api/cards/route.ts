import { NextResponse } from "next/server";
import { connect } from "@/lib/dbConnection";
import Cards from "@/models/cardsModel";

export async function GET() {
  try {
    await connect();

    const data = await Cards.find({});

    return NextResponse.json({ data }, { status: 200 });
  } catch (e: any) {
    console.error(e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
