"use client";

import { Deck, YugiCards } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

export const DeckContext = createContext({
  deck: {} as Deck,
  dispatch: (() => {}) as React.Dispatch<any>,
});

function deckReducer(deck: any, action: { type: string; payload?: any }): Deck {
  switch (action.type) {
    case "ADD_CARD":
      const { cards, deckType } = action.payload;
      return { ...deck, [deckType]: [...deck[deckType], ...cards] };
    case "REMOVE_CARD":
      const { cardId, deckTypeToRemove } = action.payload;
      const updatedDeck = deck[deckTypeToRemove].filter(
        (card: YugiCards) => card.id !== cardId
      );
      return {
        ...deck,
        [deckTypeToRemove]: [...updatedDeck],
      };
    default:
      return deck;
  }
}

export function DeckContextProvider({ children }: { children: ReactNode }) {
  const [deck, dispatch] = useReducer(deckReducer, {
    name: "",
    main: [],
    extra: [],
    side: [],
  });

  const contextValue = useMemo(() => {
    return { deck, dispatch };
  }, [deck, dispatch]);

  const addCards = (cards: YugiCards[], deckType: string) => {
    console.log(cards, deckType);
  };
  const removeCard = (card: YugiCards, deckType: string) => {
    dispatch({ type: "REMOVE_CARD", payload: { card, deckType } });
  };

  return (
    <DeckContext.Provider value={contextValue}>{children}</DeckContext.Provider>
  );
}

const useDeckContext: any = () => useContext(DeckContext);

export default useDeckContext;
