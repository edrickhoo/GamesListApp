import React from "react";
import GameCard from "./GameCard";
import MoreInfo from "./MoreInfo";

const Games = ({
  favourites,
  setFavourites,
  render,
  toggleFavourites,
  closeGameDetails,
  toggleMoreInfo,
  gameDetails,
  showMoreInfo,
}) => {
  if (render === null) {
    return <div className="max-w-[1640px] mx-auto p-4">Loading...</div>;
  }

  return (
    <>
      <div className="max-w-[1640px] mx-auto grid grid-cols-1  gap-4 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {render !== null && Array.isArray(render)
          ? render.map((item) => {
              return (
                <GameCard
                  toggleMoreInfo={toggleMoreInfo}
                  key={item.name}
                  title={item.name}
                  genres={item.genres}
                  platforms={item.platforms}
                  img={item.background_image}
                  rating={item.rating}
                  id={item.id}
                  item={item}
                  favourites={favourites}
                  toggleFavourites={toggleFavourites}
                  showMoreInfo={showMoreInfo}
                />
              );
            })
          : null}
      </div>
      {toggleMoreInfo ? (
        <MoreInfo
          gameDetails={gameDetails}
          favourites={favourites}
          setFavourites={setFavourites}
          toggleFavourites={toggleFavourites}
          closeGameDetails={closeGameDetails}
        />
      ) : null}
    </>
  );
};

export default Games;
