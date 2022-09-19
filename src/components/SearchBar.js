import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchFavourites, searchGame, searchInputBar }) => {
  return (
    <div className="max-w-[1640px] mx-auto py-4 px-4 flex">
      <input
        ref={searchInputBar}
        onChange={(e) => searchFavourites(e)}
        className="border px-2"
        placeholder="Search Game"
        onKeyDown={(e) => searchGame(e)}
      />
      <button
        onClick={(e) => searchGame(e)}
        className="flex items-center justify-center rounded-r border pr-2 pl-1 py-1"
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchBar;
