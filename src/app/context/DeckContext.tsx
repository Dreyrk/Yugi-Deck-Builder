"use client";

import { Deck, YugiCards } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const emptyDeck = {
  _id: "",
  name: "",
  main: [],
  extra: [],
  side: [],
};

export const DeckContext = createContext({
  deck: {} as Deck,
  dispatch: (() => {}) as React.Dispatch<any>,
});

function deckReducer(deck: any, action: { type: string; payload?: any }): Deck {
  switch (action.type) {
    case "RESET":
      return emptyDeck;
    case "CHANGE_NAME":
      const { name } = action.payload;
      return { ...deck, name };
    case "ADD_CARD":
      const { cards, deckType } = action.payload;
      return { ...deck, [deckType]: [...deck[deckType], ...cards] };
    case "REMOVE_CARD":
      const { cardId, deckTypeToRemove } = action.payload;
      const indexOfCardToRemove = deck[deckTypeToRemove].findIndex(
        (card: YugiCards) => card.id === cardId
      );

      if (indexOfCardToRemove !== -1) {
        const updatedDeck = [...deck[deckTypeToRemove]];
        updatedDeck.splice(indexOfCardToRemove, 1);

        return {
          ...deck,
          [deckTypeToRemove]: updatedDeck,
        };
      }
    default:
      return deck;
  }
}

export function DeckContextProvider({ children }: { children: ReactNode }) {
  const [getStoredDeck, setStoredDeck] = useLocalStorage("deck");

  const storedDeck = getStoredDeck();

  const [deck, dispatch] = useReducer(deckReducer, storedDeck || emptyDeck);

  const contextValue = useMemo(() => {
    return { deck, dispatch };
  }, [deck, dispatch]);

  useEffect(() => {
    setStoredDeck(deck);
  }, [deck, setStoredDeck]);

  return (
    <DeckContext.Provider value={contextValue}>{children}</DeckContext.Provider>
  );
}

const useDeckContext: any = () => useContext(DeckContext);

export default useDeckContext;
