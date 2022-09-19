import React, { useState, useEffect } from "react";
import Header from "./components/Header";

import GamesWrapper from "./components/GamesWrapper";

function App() {
  const [selected, setSelected] = useState("Home");
  const [favourites, setFavourites] = useState([]);
  const [filterFavourites, setFilterFavourites] = useState([]);

  const fav = JSON.parse(localStorage.getItem("Favourites"));

  useEffect(() => {
    if (fav !== null && Array.isArray(fav) && fav[0]) {
      setFavourites(fav);
      setFilterFavourites(fav);
    }
  }, []);
  return (
    <div className="App">
      <Header selected={selected} setSelected={setSelected} />
      <GamesWrapper
        selected={selected}
        setSelected={setSelected}
        favourites={favourites}
        setFavourites={setFavourites}
        filterFavourites={filterFavourites}
        setFilterFavourites={setFilterFavourites}
      />
    </div>
  );
}

export default App;
