import React from "react";
import Genres from "./Genres";
import Platforms from "./Platforms";
import GameImage from "./GameImage";
import { AiFillStar } from "react-icons/ai";

import Container from "./Container";
import Favourite from "./Favourite";

const GameCard = ({
  title,
  genres,
  platforms,
  img,
  rating,
  id,
  moreInfo,
  websiteURL,
  item,
  favourites,
  toggleFavourites,
  showMoreInfo,
}) => {
  const isFavourited = () => {
    return favourites.filter((game) => game.id === id).length > 0;
  };

  return (
    <div
      className={
        moreInfo
          ? "flex flex-col border-2 border-solid bg-black text-white "
          : "flex flex-col border-2 border-solid justify-between"
      }
    >
      <div>
        <p className="text-center font-medium text-lg">{title}</p>
      </div>
      <div className="px-2">
        <Genres moreInfo={moreInfo} genres={genres} />

        <Platforms moreInfo={moreInfo} platforms={platforms} />
      </div>
      <div className="flex space-x-2 items-center">
        <GameImage img={img} />
        {moreInfo ? (
          <p className="pr-4 overflow-y-scroll max-h-[300px] w-full text-sm md:text-base">
            {moreInfo}
          </p>
        ) : null}
      </div>

      <div className="flex justify-evenly items-center px-4 py-2">
        <div>
          <div className="flex items-center space-x-2">
            <AiFillStar />
            <div>{rating}/5</div>
          </div>
        </div>
        {moreInfo ? (
          <div className="hover:cursor-pointer hover:text-blue-500">
            <a
              href={websiteURL}
              target="_blank"
              alt="Game website"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        ) : (
          <div
            onClick={() => {
              showMoreInfo(id);
            }}
            className="hover:cursor-pointer hover:text-blue-500"
          >
            More Info..
          </div>
        )}
        <Favourite
          id={id}
          item={item}
          isFavourited={isFavourited}
          toggleFavourites={toggleFavourites}
        />
      </div>
    </div>
  );
};

export default GameCard;
