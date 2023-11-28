import { Deck } from "@/types";
import { createContext, useContext } from "react";

export const DeckContext = createContext({
  deck: {} as Deck,
  dispatch: (() => {}) as React.Dispatch<any>,
});

const useDeckContext: any = () => useContext(DeckContext);

export default useDeckContext;
