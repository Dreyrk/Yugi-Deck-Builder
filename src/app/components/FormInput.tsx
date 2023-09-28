"use client";

import { FormInputProps } from "@/types";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function FormInput({
  id,
  label,
  value,
  setValue,
  Logo,
  type,
}: FormInputProps) {
  const [show, setShow] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (id.includes("confirm")) {
      setValue(e.target.value);
    } else {
      setValue((prev: any) => ({ ...prev, [id]: e.target.value as string }));
    }
  };
  return (
    <div className="flex">
      <div className="grid w-8 h-8 text-black border-2 place-content-center">
        {<Logo size={30} />}
      </div>
      <div className="relative">
        <input
          id={id}
          type={!show ? type : "text"}
          value={value}
          name={id}
          onChange={onChange}
          className="w-full h-8 px-2 py-1 text-gray-900 placeholder-transparent border-b-2 border-gray-300 rounded-lg peer focus:outline-none focus:border-purple-600"
          autoComplete="off"
          placeholder={label}
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-600 transition-all left-1 -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-1 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:font-light peer-focus:text-sm">
          {label}
        </label>
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-1 text-black top-1.5 no-style-btn">
            {!show ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
