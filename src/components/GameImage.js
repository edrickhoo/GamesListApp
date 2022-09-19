import React from "react";

const GameImage = ({ img }) => {
  return (
    <div className="my-2 w-full">
      <img className="h-[250px] w-full object-cover" src={img} alt="" />
    </div>
  );
};

export default GameImage;
