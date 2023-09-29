import { AddToDeckModalProps } from "@/types";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import YugiCard from "./YugiCard";

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function AddToDeckModal({
  isOpen,
  setIsOpen,
  deck,
  allCards,
}: AddToDeckModalProps) {
  console.log(allCards);
  return (
    <motion.dialog
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-200 w-[92vw] h-[75vh] lg:w-[40vw] p-4 flex flex-col justify-between rounded-sm shadow-lg">
        <button className="" onClick={() => setIsOpen(false)} type="button">
          <AiOutlineCloseCircle color="black" size={30} />
        </button>
        <p className="text-2xl px-4 text-black">
          <span
            style={{ color: `var(--deck-${deck})` }}
            className={`mx-1 capitalize`}>
            {deck}
          </span>
          Deck :
        </p>
        <div className="h-5/6 w-full p-2">
          <div className="bg-slate-500 z-30 h-full w-full overflow-y-auto overflow-x-hidden grid grid-cols-2 lg:grid-cols-4 place-items-center">
            {allCards &&
              allCards.map((card) => <YugiCard card={card} key={card.id} />)}
          </div>
        </div>
      </motion.div>
    </motion.dialog>
  );
}
