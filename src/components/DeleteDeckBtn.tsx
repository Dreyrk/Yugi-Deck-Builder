import { FaTrash } from "react-icons/fa";

export default function DeleteDeckBtn({
  deleteDeck,
}: {
  deleteDeck: () => void;
}) {
  return (
    <button
      className="absolute top-1 right-1 p-2 rounded-sm backdrop-blur hover:scale-110"
      type="button"
      onClick={deleteDeck}>
      <FaTrash size={30} color="#d00000" />
    </button>
  );
}
