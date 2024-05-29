import React from "react";
import categoriesListingData from "../../data/categoriesListingData";

function CategoriesListingItems({categoryName}) {
  return (
    <div className="justify-center flex p-8">
      <div className="w-fit grid grid-cols-4">
        {categoriesListingData
          .filter((item) => item.category === categoryName)
          .map((items) => (
            <button>
              <div className="border border-black overflow-hidden rounded-xl hover:scale-110 duration-300 hover:shadow-2xl mx-8">
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
                        {items.location}
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
          ))}
      </div>
    </div>
  );
}

export default CategoriesListingItems;
