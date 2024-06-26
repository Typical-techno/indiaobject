import React, { useState } from "react";
import DropdownFilter from "./DropdownFilter";
import { keywords, shopCategory, whereLocation } from "../../data/searchData";

function SearchBox({ searchItems }) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [where, setWhere] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let ref = window.location.href;
    if (ref.includes("/c/")) {
      let newUrl = `${category}?keyword=${keyword}&location=${where}`;
      window.location.replace(newUrl);
    } else {
      let newUrl = `c/${category}?keyword=${keyword}&location=${where}`;
      window.location.replace(newUrl);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black bg-white flex flex-col xl:flex-row rounded-xl shadow-2xl p-4 gap-4 justify-between w-full z-10"
    >
      {searchItems.map((items, index) => (
        <label
          key={index}
          className="flex flex-col text-left text-xl font-semibold border-l-2 xl:border-0 border-gray-400 px-2 w-full"
        >
          {items.label}
          <div className="flex items-center w-full gap-4 border-0 justify-between">
            {/* <input placeholder={items.placeholder} className="focus:outline-none" /> */}
            <DropdownFilter
              keywords={keywords}
              where={whereLocation}
              category={shopCategory}
              placeholder={items.placeholder}
              id={items.id}
              onSelect={(value) => {
                if (items.id === "keywords") {
                  setKeyword(value);
                } else if (items.id === "category") {
                  while (value.includes(" ")) {
                    value = value.replace(" ", "-");
                  }
                  setCategory(value.toLowerCase());
                } else if (items.id === "where") {
                  setWhere(value);
                }
              }}
            />
            <p className="mt-1">
              <i className={`fi ${items.icon}`}></i>
            </p>
          </div>
        </label>
      ))}
      <button
        type="submit"
        className="bg-blue-500 rounded-xl p-4 text-white min-w-36"
      >
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Search</p>
          <p className="text-base mt-1">
            <i className="fi fi-br-search"></i>
          </p>
        </div>
      </button>
    </form>
  );
}

export default SearchBox;
