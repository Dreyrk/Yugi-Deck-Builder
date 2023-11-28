"use client";

import { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { toast } from "react-toastify";
import { AuthProps, AuthUser } from "@/types";
import FormInput from "../FormInput";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login({ registered, setRegistered }: AuthProps) {
  const router = useRouter();
  const { status } = useSession();
  const [loginUser, setLoginUser] = useState<AuthUser>({
    email: "",
    password: "",
  });

  const formInputs = [
    {
      id: "email",
      label: "Email",
      value: loginUser.email,
      setValue: setLoginUser,
      logo: AiOutlineMail,
      type: "text",
    },
    {
      id: "password",
      label: "Password",
      value: loginUser.password,
      setValue: setLoginUser,
      logo: AiOutlineLock,
      type: "password",
    },
  ];

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      ...loginUser,
      redirect: false,
      callbackUrl: "/",
    });
    if (res?.ok && status === "authenticated") {
      toast.success("Login Successfully !");
      router.push("/profile");
    } else {
      toast.warn("Wrong credentials...");
    }
  };

  return (
    <div className="grid place-content-center my-28">
      <form
        onSubmit={login}
        className="flex flex-col items-center rounded-lg bg-slate-100 max-w-sm justify-center gap-12 p-6">
        <h1 className="m-0 text-2xl font-bold text-black">Sign In</h1>
        {formInputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              id={input.id}
              label={input.label}
              value={input.value}
              setValue={input.setValue}
              Logo={input.logo}
              type={input.type}
            />
          );
        })}
        <button
          type="submit"
          className="px-4 py-1 text-lg font-semibold hover:text-slate-300 text-slate-50 bg-indigo-500 rounded-2xl">
          Login
        </button>
        <button
          onClick={() => setRegistered(false)}
          type="button"
          className="underline mb-2 text-black hover:text-slate-300">
          No Account yet ?
        </button>
      </form>
    </div>
  );
}
