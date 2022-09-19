import React from "react";
import FilterCard from "./FilterCard";

const FilterCards = ({ filter }) => {
  return (
    <div className="max-w-[1640px] mx-auto py-6 px-4 grid grid-cols-4 gap-2">
      <FilterCard filter={() => filter("all")} filterType="All" />
      <FilterCard filter={() => filter("pc")} filterType="PC" />
      <FilterCard filter={() => filter("switch")} filterType="Switch" />
      <FilterCard filter={() => filter("playstation 5")} filterType="PS5" />
      <FilterCard filter={() => filter("xbox")} filterType="Xbox" />
    </div>
  );
};

export default FilterCards;
