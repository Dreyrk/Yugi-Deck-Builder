"use client";

import { FavoriteBtnProps } from "@/types";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export default function FavoriteBtn({
  size = 40,
  color,
  like,
  unlike,
}: FavoriteBtnProps) {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleClick = () => {
    if (favorite) {
      unlike();
      setFavorite(false);
    } else {
      like();
      setFavorite(true);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      {favorite ? (
        <MdFavorite size={size} color={color} />
      ) : (
        <MdFavoriteBorder size={size} />
      )}
    </button>
  );
}
