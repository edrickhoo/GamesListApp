import React from "react";

const Genres = ({ genres, moreInfo }) => {
  return (
    <div className="flex items-center space-x-6 border-b">
      <div>Genres:</div>
      <div
        className={
          moreInfo
            ? "flex flex-wrap items-center space-x-3"
            : "flex flex-wrap items-center space-x-1"
        }
      >
        {genres.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                moreInfo
                  ? "py-1 px-2 my-1 rounded-full bg-gray-800 text-white text-[12px] whitespace-nowrap"
                  : "py-1 px-2 my-1 rounded-full bg-gray-800 text-white text-[9px] whitespace-nowrap"
              }
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
