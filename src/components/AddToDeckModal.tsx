"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { AddToDeckModalProps, YugiCards } from "@/types";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import YugiCard from "./cards/YugiCard";
import useDeckContext from "@/context/DeckContext";
import Loader from "./Loader";
import FiltersBar from "./FiltersBar";

export default function AddToDeckModal({ setIsOpen, deckType, allCards }: AddToDeckModalProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const { deck, dispatch } = useDeckContext();
  const [selectedCards, setSelectedCards] = useState(deck[deckType]);
  const [displayedCards, setDisplayedCards] = useState<YugiCards[]>(allCards.slice(0, 60));
  const [visibleCardCount, setVisibleCardCount] = useState(12);
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  useMemo(() => {
    const searchedCards = allCards
      .filter((card) => card.name.toLowerCase().includes(deferredSearch.toLowerCase()))
      .slice(0, 60);
    setDisplayedCards(searchedCards);
  }, [deferredSearch, allCards]);

  useEffect(() => {
    const list = listRef.current;
    const loadMoreCards = () => {
      const nextBatch = displayedCards.slice(visibleCardCount, visibleCardCount * 4);
      setDisplayedCards([...displayedCards, ...nextBatch]);
      setVisibleCardCount(visibleCardCount + 10);
    };

    const handleScroll = () => {
      if (list) {
        if (list.scrollTop + 20 >= list.scrollHeight - list.clientHeight) {
          loadMoreCards();
        }
      }
    };

    if (list) {
      list.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (list) {
        list.removeEventListener("scroll", handleScroll);
      }
    };
  }, [displayedCards, listRef, visibleCardCount]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const addToDeck = () => {
    if (deckType === "main" || deckType === "extra" || deckType === "side") {
      dispatch({
        type: "ADD_CARD",
        payload: { cards: selectedCards, deckType },
      });
      closeModal();
    }
  };

  console.log(allCards, displayedCards);

  return (
    <motion.dialog initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="modal-overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-stone-200 w-[92dvw] h-[85dvh] overflow-hidden lg:w-[950px] p-4 flex flex-col justify-between rounded-sm shadow-lg z-50">
        <button className="max-w-[35px]" onClick={closeModal} type="button">
          <AiOutlineCloseCircle color="black" size={30} />
        </button>
        <div className="flex justify-between mt-4">
          <p className="text-2xl px-4 text-black">
            <span style={{ color: `var(--deck-${deckType})` }} className={`mx-1 capitalize`}>
              {deckType}
            </span>
            Deck :
          </p>
          <button className="m-2" type="button" onClick={addToDeck}>
            <AiFillCheckCircle size={40} color="#a5be00" />
          </button>
        </div>
        <div className="h-full w-full p-2">
          <div className="flex flex-col items-center gap-6 px-4 py-4">
            <input
              className="w-5/6 rounded-md p-1 box-border"
              id="search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
            <FiltersBar cards={allCards} setCards={setDisplayedCards} />
          </div>
          <ul
            ref={listRef}
            className={`z-30 h-full w-full overflow-y-auto overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 place-items-center scrollbar-${deckType}`}>
            {allCards ? (
              displayedCards.map((card, i) => (
                <li key={card.id + i} className="m-2">
                  <YugiCard selectedCards={selectedCards} setSelectedCards={setSelectedCards} card={card} />
                </li>
              ))
            ) : (
              <Loader />
            )}
          </ul>
        </div>
      </motion.div>
    </motion.dialog>
  );
}
