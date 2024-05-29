import React from "react";
import { Link } from "react-router-dom";
import {categoriesItems} from "../../data/categories";

function Categories() {
  return (
    <div className="flex w-11/12 h-full py-24 px-24 items-center">
      <div className="space-y-16 w-full">
        <div className="space-y-12">
          <p className="text-5xl font-bold text-left drop-shadow-xl">Popular Categories</p>
          <p className="text-xl font-bold text-left">
            <span className="text-blue-500">Everything</span> you want listed{" "}
            <span className="text-blue-500">Here.</span>
          </p>
        </div>
        <div>
          <div className="grid grid-cols-6 w-full">
            {categoriesItems
              .filter((item) => item.visibleScreen === "Home")
              .map((filteredItems) => (
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
          <div className="p-4">
            <Link to={'/categories'}>
              <button className="bg-blue-500 p-4 rounded">
                <p className="font-semibold text-xl text-white">Browse All</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
