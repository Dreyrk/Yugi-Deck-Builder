"use client";

import { FiltersBarProps } from "@/types";
import { MainDeckTypes, ExtraDeckTypes } from "@/constants";
import { useState } from "react";

export default function FiltersBar({ cards, setCards }: FiltersBarProps) {
  let selectedMainTypes = [];

  const mainDeckSelect = (e) => {
    selectedMainTypes.push(e.target.value);
    console.log(selectedMainTypes, e.target.value);
  };

  return (
    <div className="p-4">
      <select
        value={selectedMainTypes.join(", ")}
        onChange={mainDeckSelect}
        id="main-deck-select">
        <option value="">------Main Types------</option>
        {MainDeckTypes.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
