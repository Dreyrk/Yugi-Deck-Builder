"use client";

import { Deck } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

export const DeckContext = createContext({});

export function DeckContextProvider({ children }: { children: ReactNode }) {
  const [deck, setDeck] = useState<Deck>({
    name: "",
    main: [],
    extra: [],
    side: [],
  });

  return (
    <DeckContext.Provider value={{ deck, setDeck }}>
      {children}
    </DeckContext.Provider>
  );
}

const useDeckContext: any = () => useContext(DeckContext);

export default useDeckContext;
