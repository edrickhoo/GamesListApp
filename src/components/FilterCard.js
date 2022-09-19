import React from "react";

function FilterCard({ filter, filterType }) {
  return (
    <div onClick={filter} className="hover:cursor-pointer bg-black/95">
      <p className="text-center text-white">{filterType}</p>
    </div>
  );
}

export default FilterCard;
