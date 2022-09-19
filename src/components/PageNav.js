import React from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const PageNav = ({ pageNum, error, nextPage, prevPage, setSpecificPage }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-center">
        <button
          onClick={() => prevPage()}
          className="flex items-center justify-center p-2"
        >
          <MdChevronLeft className="scale-125" />
        </button>
        <div className="text-xl">
          <input
            type="number"
            className=" w-[40px] text-center pageNum"
            size="1"
            placeholder={pageNum}
            onKeyDown={(e) => setSpecificPage(e)}
          />
        </div>
        <button
          onClick={() => nextPage()}
          className="flex items-center justify-center p-2"
        >
          <MdChevronRight className="scale-125" />
        </button>
      </div>

      {error !== null && error.indexOf("page") !== -1 ? (
        <div className="flex items-center justify-center mt-2">
          <p>{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default PageNav;
