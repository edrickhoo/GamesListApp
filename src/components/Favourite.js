import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Favourite = ({ item, isFavourited, id, toggleFavourites }) => {
  return (
    <div
      onClick={() => {
        toggleFavourites(item, id);
      }}
      className="px-2 hover:cursor-pointer"
    >
      <AiFillHeart
        className="text-black scale-150"
        fill={isFavourited() ? "red" : "blue"}
      />
    </div>
  );
};

export default Favourite;
