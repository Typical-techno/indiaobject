import React from "react";
import categoriesListingData from "../../data/categoriesListingData";
import TopHeadNameBarItemsMain from "../../components/UI/TopHeadNameBarItemsMain";
import ImageSimpleSlider from "../../components/UI/ImageSlider";
import Rating from "@mui/material/Rating";

function CategoriesItemMainView() {
  const idcode = window.location.pathname.split("/").pop();
  console.log(idcode);
  const itemsFilter = categoriesListingData.filter(
    (item) => item.id === Number(idcode)
  );
  return (
    <div className="py-24">
      {itemsFilter.map((items, index) => (
        <TopHeadNameBarItemsMain key={index} items={items} />
      ))}
      <div className="w-full flex justify-center">
        <div className="container mx-auto p-4 md:p-20 antialiased space-x-0 md:space-x-12 space-y-8 md:space-y-0 flex flex-col md:flex-row items-center">
          {itemsFilter.map((items, index) => (
            <div key={index} className="justify-center flex flex-wrap md:flex-wrap shadow-lg w-full md:w-7/12 mx-auto group cursor-pointer transform duration-500 border">
              <ImageSimpleSlider images={items.imageAdditional} />
              <div className="text-left w-full">
                <div className="p-5">
                  <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                    {items.name}
                  </h1>
                  <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                    {items.description}
                  </p>
                  <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                    {items.location}
                  </p>
                </div>
                <div className="bg-blue-200 rounded-b-xl p-5">
                  <div className="sm:flex sm:justify-between">
                    <div>
                      <div className="text-lg text-gray-700">
                        <span className="text-gray-900 font-bold">196 km</span>{" "}
                        from Dhaka
                      </div>
                      <div className="flex items-center ">
                        <Rating name="read-only" value={items.rating} precision={0.5} readOnly />
                        <div className="text-gray-600 ml-2 text-sm md:text-base">
                          {items.ratingPerson} reviews
                        </div>
                      </div>
                    </div>
                    <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-blue-500 hover:bg-blue-400 duration-100 font-bold text-white md:text-lg rounded-lg shadow-md">
                      Get Directions
                    </button>
                  </div>
                  <div className="mt-3 text-gray-600 text-sm md:text-sm">
                    *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-blue-200 p-6 flex flex-col sm:py-12 rounded-xl border h-full justify-center w-full md:w-fit">
            <ul className="list-none text-left">
              {itemsFilter.map((items, index) => (
                <li key={index} className="rounded-lg group cursor-pointer">
                  {items.availabilityTiming.map((timing, idx) => (
                    <div key={idx} className="flex flex-col">
                      {Object.keys(timing).map((day) => (
                        <div className="flex flex-row">
                          <div className="items-center flex flex-col justify-around">
                            <div className="border-l-2 h-full border-gray-400"></div>
                            <div
                              className={`${
                                timing[day] === "closed"
                                  ? `bg-rose-400`
                                  : `bg-green-400`
                              } border-2 border-gray-400 rounded-full h-8 w-8 flex flex-grow justify-around`}
                            ></div>
                            <div className="border-l-2 h-full border-gray-400"></div>
                          </div>
                          <div className="flex flex-col  ml-2 p-2 pr-6 rounded-xl">
                            <div className="ml-4 text-xl font-medium">
                              <div key={day}>
                                <p>{day}</p>
                                <div className="mb-2 text-xs uppercase">
                                  {timing[day]}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesItemMainView;
