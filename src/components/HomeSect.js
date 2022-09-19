import React from "react";
import Games from "./Games";
import PageNav from "./PageNav";

const HomeSect = ({
  render,
  favourites,
  setFavourites,
  error,
  nextPage,
  prevPage,
  setSpecificPage,
  pageNum,
  toggleFavourites,
  closeGameDetails,
  showMoreInfo,
  toggleMoreInfo,
  gameDetails,
}) => {
  return (
    <div>
      <Games
        render={render}
        favourites={favourites}
        setFavourites={setFavourites}
        toggleFavourites={toggleFavourites}
        closeGameDetails={closeGameDetails}
        showMoreInfo={showMoreInfo}
        toggleMoreInfo={toggleMoreInfo}
        gameDetails={gameDetails}
      />

      <PageNav
        pageNum={pageNum}
        error={error}
        nextPage={nextPage}
        prevPage={prevPage}
        setSpecificPage={setSpecificPage}
      />
    </div>
  );
};

export default HomeSect;
