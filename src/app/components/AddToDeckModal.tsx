import { AddToDeckModalProps } from "@/types";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
}: AddToDeckModalProps) {
  return (
    <motion.dialog
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-200 w-[90vw] h-[70vh] lg:w-[40vw] rounded-sm shadow-lg">
        <button className="p-4" onClick={() => setIsOpen(false)} type="button">
          <AiOutlineCloseCircle color="black" size={30} />
        </button>
        <p className="text-2xl px-4 text-black">
          <span
            className={`mx-1 text-deck-${deck} capitalize`}>{`${deck}`}</span>
          Deck :
        </p>
      </motion.div>
    </motion.dialog>
  );
}
