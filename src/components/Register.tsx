"use client";

import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { AuthProps, User } from "@/types";
import { toast } from "react-toastify";
import authFetcher from "../utils/authFetcher";
import Loader from "./Loader";
import FormInput from "./FormInput";

export default function Register({ setRegistered }: AuthProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedPassword, setCheckedPassword] = useState<string>("");
  const [newUser, setNewUser] = useState<User>({
    pseudo: "",
    email: "",
    password: "",
  });
  const formInputs = [
    {
      id: "pseudo",
      label: "Username",
      value: newUser.pseudo,
      setValue: setNewUser,
      logo: AiOutlineUser,
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      value: newUser.email,
      setValue: setNewUser,
      logo: AiOutlineMail,
      type: "text",
    },
    {
      id: "password",
      label: "Password",
      value: newUser.password,
      setValue: setNewUser,
      logo: AiOutlineLock,
      type: "password",
    },
    {
      id: "confirm-password",
      label: "Confirm Password",
      value: checkedPassword,
      setValue: setCheckedPassword,
      logo: AiOutlineLock,
      type: "password",
    },
  ];

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (
      newUser.password === checkedPassword &&
      newUser.email !== "" &&
      newUser.pseudo !== ""
    ) {
      const res = await authFetcher("register", newUser);
      if (res.success) {
        setLoading(false);
        toast.success(res.message);
        setRegistered(true);
      } else {
        setLoading(false);
        toast.error(res.message);
      }
    } else {
      setLoading(false);
      toast.warn("Please confirm your password.");
    }
  };

  return (
    <div className="relative grid place-content-center my-8">
      {!loading ? (
        <form
          onSubmit={register}
          className="flex flex-col items-center justify-center gap-12 p-8 max-w-sm bg-slate-100 rounded-lg">
          <h1 className="m-0 text-2xl font-bold text-black">Sign Up</h1>
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
            Register
          </button>
          <button
            onClick={() => setRegistered(true)}
            type="button"
            className="underline mb-2 text-black hover:text-slate-300">
            Already Registered ?
          </button>
        </form>
      ) : (
        <div className="absolute w top-[110px] right-[145px]">
          <Loader size={38} />
        </div>
      )}
    </div>
  );
}
