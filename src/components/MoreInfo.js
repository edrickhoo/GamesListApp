import React from "react";
import GameCard from "./GameCard";
import { AiOutlineClose } from "react-icons/ai";

const MoreInfo = ({
  gameDetails,
  favourites,
  setFavourites,
  filterFavourites,
  closeGameDetails,
  toggleFavourites,
}) => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-[100vh] justify-center items-center py-6 px-6">
      <div className="max-w-[800px] z-20">
        {gameDetails !== null ? (
          <GameCard
            title={gameDetails.name}
            genres={gameDetails.genres}
            platforms={gameDetails.platforms}
            img={gameDetails.background_image}
            rating={gameDetails.rating}
            id={gameDetails.id}
            item={gameDetails}
            moreInfo={gameDetails.description_raw}
            websiteURL={gameDetails.website}
            favourites={favourites}
            setFavourites={setFavourites}
            filterFavourites={filterFavourites}
            toggleFavourites={toggleFavourites}
          />
        ) : (
          <div className="h-[100vh] w-full flex justify-center items-center">
            {" "}
            <p className="text-2xl text-white">Loading...</p>
          </div>
        )}
      </div>
      <div
        onClick={() => closeGameDetails()}
        className="block h-[100vh] w-full fixed top-0 left-0 bg-black/40 z-10"
      >
        <AiOutlineClose className="absolute top-5 right-5 text-white scale-[200%] hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default MoreInfo;
