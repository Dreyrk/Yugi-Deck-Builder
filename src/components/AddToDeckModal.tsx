import { AddToDeckModalProps } from "@/types";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import YugiCard from "./YugiCard";

export default function AddToDeckModal({
  setIsOpen,
  deckType,
  allCards,
}: AddToDeckModalProps) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <motion.dialog
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal-overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-stone-200 w-[92vw] h-[75vh] lg:w-[40vw] p-4 flex flex-col justify-between rounded-sm shadow-lg z-50">
        <button className="max-w-[35px]" onClick={closeModal} type="button">
          <AiOutlineCloseCircle color="black" size={30} />
        </button>
        <div className="flex justify-between">
          <p className="text-2xl px-4 text-black">
            <span
              style={{ color: `var(--deck-${deckType})` }}
              className={`mx-1 capitalize`}>
              {deckType}
            </span>
            Deck :
          </p>
          <div>
            <AiFillCheckCircle size={40} />
          </div>
        </div>
        <div className="h-5/6 w-full p-2">
          <ul
            className={`z-30 h-full w-full overflow-y-auto overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 place-items-center scrollbar-${deckType}`}>
            {allCards &&
              allCards.map((card) => (
                <li key={card.id} className="m-2">
                  <YugiCard card={card} />
                </li>
              ))}
          </ul>
        </div>
      </motion.div>
    </motion.dialog>
  );
}
