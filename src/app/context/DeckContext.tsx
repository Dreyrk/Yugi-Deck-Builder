import { YugiCards } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

export const DeckContext = createContext({});

interface Deck {
  main: YugiCards[];
  extra: YugiCards[];
  side: YugiCards[];
}

export function DeckContextProvider({ children }: { children: ReactNode }) {
  const [deck, setDeck] = useState({
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

const useDeckContext = () => useContext(DeckContext);

export default useDeckContext;
