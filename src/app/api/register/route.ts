import { connect } from "@/lib/dbConnection";
import Users from "@/models/usersModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const { pseudo, email, password } = await req.json();
  try {
    await connect();
    const findUser = await Users.findOne({ email });
    const userAlreadyExist = Boolean(findUser);
    if (userAlreadyExist) {
      return NextResponse.json(
        {
          success: false,
          message: "User Already Exist",
        },
        { status: 400 }
      );
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await Users.create({
        pseudo,
        email,
        password: hashedPassword,
      });

      return NextResponse.json(
        { success: true, message: "Successfully Registered !" },
        { status: 201 }
      );
    }
  } catch (e: any) {
    return NextResponse.json(
      {
        error: e.message,
        message: "Failed to Register... Try again later",
      },
      { status: 500 }
    );
  }
}
