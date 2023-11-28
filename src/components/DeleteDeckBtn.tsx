"use client";

import { FaTrash } from "react-icons/fa";

export default function DeleteDeckBtn() {
  return (
    <button className="hover:scale-110" type="submit">
      <FaTrash size={30} color="#d00000" />
    </button>
  );
}
