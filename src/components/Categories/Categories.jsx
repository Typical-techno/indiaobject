import React, { useEffect, useState } from "react";
import TopHeadNameBar from "../UI/TopHeadNameBar";
import { categoriesItems } from "../../data/categories";
import { Link } from "react-router-dom";
import SearchBox from "../UI/SearchBox";

function Categories() {
  const [headName, setHeadName] = useState();

  useEffect(() => {
    let tempName = window.location.pathname.toUpperCase().replace("/", "");
    setHeadName(tempName);
  },[]);

  return (
    <div>
      <TopHeadNameBar headName={headName} />
      <div className="flex justify-center my-12">
        <div className="w-8/12">
          <SearchBox />
        </div>
      </div>
      {/* {categoriesItems.map((items) => (
        <p>{items.category}</p>
      ))} */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-6 w-10/12">
          {categoriesItems.map((filteredItems) => (
            <button className="p-8">
              <Link to={`/c/${filteredItems.category}`}>
                <div
                  className={`w-full h-full rounded-xl p-4 space-y-3 hover:bg-gray-100 hover:text-blue-500 duration-150 hover:scale-110 hover:${filteredItems.hover}`}
                >
                  <p className="text-4xl items-start">
                    <i class={`fi ${filteredItems.icon}`}></i>
                  </p>
                  <p className="text-xl font-semibold items-center">
                    {filteredItems.label}
                  </p>
                  <p className="text-base text-gray-500 font-semibold items-end">
                    ( {filteredItems.count} Entries )
                  </p>
                </div>
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
