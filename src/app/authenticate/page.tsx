import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Auth from "../components/Auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/profile");
  }
  return <Auth />;
}
