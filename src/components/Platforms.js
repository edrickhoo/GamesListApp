import React from "react";

const Platforms = ({ platforms, moreInfo }) => {
  const filterPlatforms = () => {
    return platforms.filter((item) => {
      return (
        item.platform.name === "PC" ||
        item.platform.name.toLowerCase().indexOf("xbox") !== -1 ||
        item.platform.name.toLowerCase().indexOf("switch") !== -1 ||
        item.platform.name.toLowerCase().indexOf("playstation") !== -1
      );
    });
  };
  return (
    <div className="flex items-center space-x-2">
      <div>Platforms:</div>
      <div
        className={`
            flex flex-wrap items-center ${
              moreInfo ? "space-x-3" : "space-x-1"
            }`}
      >
        {platforms !== null
          ? filterPlatforms().map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    moreInfo
                      ? "py-1 px-2 my-1 rounded-full bg-gray-800 text-white text-[12px] whitespace-nowrap"
                      : "py-1 px-2 my-1 rounded-full bg-gray-800 text-white text-[9px] whitespace-nowrap"
                  }
                >
                  {item.platform.name}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Platforms;
