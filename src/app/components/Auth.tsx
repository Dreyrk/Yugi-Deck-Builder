"use client";

import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

export default function Auth() {
  const [registered, setRegistered] = useState<boolean>(false);
  return registered ? (
    <Login registered={registered} setRegistered={setRegistered} />
  ) : (
    <Register registered={registered} setRegistered={setRegistered} />
  );
}
