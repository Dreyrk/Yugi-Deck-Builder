import { FavoriteBtnProps } from "@/types";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export default function FavoriteBtn({
  size = 40,
  color,
  type = "button",
  fav = false,
}: FavoriteBtnProps) {
  return (
    <button type={type}>
      {fav ? (
        <MdFavorite size={size} color={color} />
      ) : (
        <MdFavoriteBorder size={size} />
      )}
    </button>
  );
}
