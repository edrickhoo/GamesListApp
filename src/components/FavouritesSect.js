import React from "react";
import Games from "./Games";

const FavouritesSect = ({
  favourites,
  setFavourites,
  render,
  showMoreInfo,
  toggleMoreInfo,
  gameDetails,
  toggleFavourites,
  closeGameDetails,
}) => {
  return (
    <>
      <Games
        render={render}
        favourites={favourites}
        setFavourites={setFavourites}
        showMoreInfo={showMoreInfo}
        toggleMoreInfo={toggleMoreInfo}
        gameDetails={gameDetails}
        toggleFavourites={toggleFavourites}
        closeGameDetails={closeGameDetails}
      />
    </>
  );
};

export default FavouritesSect;
