import React, { useState, useEffect, useRef } from "react";
import FilterCards from "./FilterCards";
import {
  getGameListApi,
  pagesWithSearchApi,
  searchGameApi,
  getGameDetailsApi,
} from "../api/RawgApi";
import SearchBar from "./SearchBar";
import { Route, Routes } from "react-router-dom";
import FavouritesSect from "./FavouritesSect";
import HomeSect from "./HomeSect";

function GamesWrapper({
  selected,
  favourites,
  setFavourites,
  filterFavourites,
  setFilterFavourites,
}) {
  const [info, setInfo] = useState(null);
  const [filterInfo, setFilterInfo] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [toggleMoreInfo, setToggleMoreInfo] = useState(false);
  const [gameDetails, setGameDetails] = useState(null);
  const [error, setError] = useState(null);

  const searchInputBar = useRef(null);

  // On First load favourites not show red heart on game list

  useEffect(() => {
    setGameList();
  }, []);

  useEffect(() => {
    setGameList();
    setPageNum(1);
    setSearchInput("");
    searchInputBar.current.value = "";
    setFavourites(filterFavourites);
  }, [selected]);

  useEffect(() => {
    if (searchInput !== null && searchInput !== "") {
      setInfo(null);
      setpagesWithSearch();
    } else {
      setInfo(null);
      setGamePageList();
    }
  }, [pageNum]);

  useEffect(() => {
    console.log({ fav: favourites });
    save();
  }, [favourites, filterFavourites]);

  // Getting Api Data
  async function setGameList() {
    try {
      setError(null);
      setInfo(await getGameListApi(pageNum));
      setFilterInfo(await getGameListApi(pageNum));
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }

  async function setGamePageList() {
    try {
      setError(null);
      setInfo(await getGameListApi(pageNum));
      setFilterInfo(await getGameListApi(pageNum));
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }

  const setpagesWithSearch = async () => {
    try {
      setError(null);
      let data = await pagesWithSearchApi(searchInput, pageNum);

      setInfo(data);
      console.log(data);
      setFilterInfo(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  async function setDetailsInfo(id) {
    try {
      setError(null);
      setGameDetails(await getGameDetailsApi(id));
    } catch (error) {
      setError(error.message);
    }
  }

  // PageNav
  const nextPage = async () => {
    setPageNum((prev) => prev + 1);
  };

  const prevPage = async () => {
    setPageNum((prev) => {
      if (prev === 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  const setSpecificPage = async (e) => {
    if (e.key === "Enter") {
      setPageNum(e.target.value);
      e.target.value = "";
    }
  };

  // Search

  const searchGame = async (e) => {
    if (selected === "Home") {
      if (e.key === "Enter" || e.type === "click") {
        let data = await searchGameApi(searchInput);
        setInfo(data);
        setFilterInfo(data);
        setPageNum(1);
      }
    }
  };

  const searchFavourites = (e) => {
    setSearchInput(e.target.value);
    if (selected === "Favourites" && e.target.value !== "") {
      let searchedFavourites = filterFavourites.filter(
        (item) =>
          item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
      setFavourites(searchedFavourites);
    } else {
      setFavourites(filterFavourites);
    }
  };

  // FilterCards
  const filter = (platform) => {
    let filteredItems = [];

    if (platform === "all") {
      filterAll();
      return;
    }

    if (selected === "Home") {
      filterInfo.forEach((item) => {
        if (item.platforms !== null) {
          item.platforms.forEach((gamePlatform) => {
            if (
              gamePlatform.platform.name.toLowerCase().includes(platform) &&
              !filteredItems.includes(item)
            ) {
              filteredItems.push(item);
            }
          });
        }
      });
      setInfo(filteredItems);
    } else if (selected === "Favourites") {
      // let favouritesToFilter =
      //   favourites.length < filterFavourites.length
      //     ? favourites
      //     : filterFavourites;

      filterFavourites.forEach((item) => {
        item.platforms.forEach((gamePlatform) => {
          if (
            gamePlatform.platform.name.toLowerCase().includes(platform) ===
              true &&
            !filteredItems.includes(item)
          ) {
            filteredItems.push(item);
          }
        });
      });
      setFavourites(filteredItems);
    }
  };

  const filterAll = () => {
    if (selected === "Home") {
      setInfo(filterInfo);
    } else {
      setFavourites(filterFavourites);
    }
  };

  // Favourites

  function toggleFavourites(item, id) {
    if (favourites.filter((game) => game.id === id).length > 0) {
      setFavourites(removeGame(favourites, id));
    } else {
      setFavourites([...favourites, item]);
    }

    if (filterFavourites.filter((game) => game.id === id).length > 0) {
      setFilterFavourites(removeGame(filterFavourites, id));
    } else {
      setFilterFavourites([...filterFavourites, item]);
    }
  }

  function removeGame(list, id) {
    return list.filter((game) => {
      if (game.id === id) {
        return false;
      } else {
        return true;
      }
    });
  }

  function save() {
    localStorage.setItem("Favourites", JSON.stringify(filterFavourites));
  }

  // MoreInfo
  const closeGameDetails = () => {
    setGameDetails(null);
    setToggleMoreInfo(!toggleMoreInfo);
  };

  const showMoreInfo = (id) => {
    setToggleMoreInfo(!toggleMoreInfo);
    setDetailsInfo(id);
  };

  return (
    <>
      <SearchBar
        selected={selected}
        searchFavourites={searchFavourites}
        searchGame={searchGame}
        searchInputBar={searchInputBar}
      />
      <FilterCards filter={filter} />
      <Routes>
        <Route
          path="/"
          element={
            <HomeSect
              render={info}
              favourites={favourites}
              setFavourites={setFavourites}
              filterFavourites={filterFavourites}
              setFilterFavourites={setFilterFavourites}
              nextPage={nextPage}
              prevPage={prevPage}
              setSpecificPage={setSpecificPage}
              pageNum={pageNum}
              toggleFavourites={toggleFavourites}
              closeGameDetails={closeGameDetails}
              showMoreInfo={showMoreInfo}
              toggleMoreInfo={toggleMoreInfo}
              gameDetails={gameDetails}
              error={error}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <FavouritesSect
              render={favourites}
              favourites={favourites}
              setFavourites={setFavourites}
              filterFavourites={filterFavourites}
              setFilterFavourites={setFilterFavourites}
              toggleFavourites={toggleFavourites}
              closeGameDetails={closeGameDetails}
              showMoreInfo={showMoreInfo}
              toggleMoreInfo={toggleMoreInfo}
              gameDetails={gameDetails}
            />
          }
        />
      </Routes>
    </>
  );
}

export default GamesWrapper;
