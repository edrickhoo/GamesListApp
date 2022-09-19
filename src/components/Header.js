import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ selected, setSelected }) => {
  useEffect(() => {
    if (window.location.href.indexOf("favourites") !== -1) {
      setSelected("Favourites");
    }
  }, []);

  return (
    <header className="bg-black">
      <div className="max-w-[1640px] mx-auto p-4 flex justify-between items-center ">
        <div className="flex items-center space-x-2">
          <h1 className="text-white text-xl font-medium">
            <span className="text-red-600">K</span>araze
            <span className="text-red-600"> G</span>ames
          </h1>
        </div>
        <nav className="flex items-center space-x-2">
          <Link
            onClick={() => setSelected("Home")}
            to="/"
            href=""
            className={`text-white hover:bg-white/70 py-2 px-2 ${
              selected === "Home" ? "bg-white/80" : null
            } `}
          >
            Home
          </Link>
          <Link
            onClick={() => setSelected("Favourites")}
            to="favourites"
            href=""
            className={`text-white hover:bg-white/70 py-2 px-2 ${
              selected === "Favourites" ? "bg-white/80" : null
            }`}
          >
            My Favourites
          </Link>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
