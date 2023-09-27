import "next-auth";
import { User as BaseUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      pseudo: string;
    } & Session["user"];
  }

  interface User extends BaseUser {
    pseudo?: string;
    _id: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      pseudo: string;
      email: string;
    } & JWT["user"];
  }
}
