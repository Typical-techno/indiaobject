import React, { useEffect, useState } from "react";
import categoriesListingData from "../../data/categoriesListingData";
import { Link } from "react-router-dom";

function CategoriesListingItems({ categoryName }) {
  const [paramsLocation, setParamsLocation] = useState("");
  const [paramsKeyword, setParamsKeyword] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    setParamsKeyword(params.get("keyword"));
    setParamsLocation(params.get("location"));
  }, []);
  console.log(paramsKeyword + paramsLocation);

  return (
    <div className="justify-center flex p-8">
      <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {categoriesListingData
          .filter(
            (item) =>
              (item.category === categoryName &&
                item.location === paramsLocation) ||
              window.location.href.includes("all-categories")
          )
          .map((items, index) => (
            <Link key={index} to={`/s/${items.id}`}>
              <button>
                <div className="border border-black overflow-hidden rounded-xl hover:scale-110 duration-300 hover:shadow-2xl">
                  <div className="overflow-hidden">
                    <img
                      src={require(`../../assets/images/${items.image}`)}
                      height={300}
                      width={300}
                      alt="shop"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="px-4 py-2">
                      <div className="text-left py-2">
                        <p className="text-3xl font-semibold">{items.name}</p>
                      </div>
                      <div className="text-base font-semibold  text-gray-500 text-left flex flex-col justify-center gap-2 px-4">
                        <p>
                          <span className="p-2">
                            <i className={`fi ${items.locationIcon}`}></i>
                          </span>{" "}
                          {items.location}
                        </p>
                        <p>
                          <span className="p-2">
                            <i className={`fi ${items.phoneIcon}`}></i>
                          </span>
                          {items.phone}
                        </p>
                        <p>
                          <span className="p-2">
                            <i className={`fi ${items.locationIcon}`}></i>
                          </span>{" "}
                          {items.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex border-t-2 items-center text-gray-500 justify-center">
                      <div className="text-base font-semibold items-center p-2 gap-2 flex">
                        <p className="items-center flex gap-1">
                          {items.rating}
                          <p className="pt-1 text-blue-500">
                            <i className="fi fi-bs-star"></i>
                          </p>
                          : {items.ratingPerson} Rating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategoriesListingItems;
