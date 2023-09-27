import { AuthProps } from "@/types";

export default function Login({ registered, setRegistered }: AuthProps) {
  return (
    <form className="w-full h-full flex justify-center items-center" action="">
      <label htmlFor=""></label>
      <input type="text" />
    </form>
  );
}
