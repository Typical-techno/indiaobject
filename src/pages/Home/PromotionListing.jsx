import React from "react";
import promotionListingData from "../../data/promotionListingData";
import { Link } from "react-router-dom";

function PromotionListing() {
  return (
    <div className="flex w-11/12 h-full py-24 px-2 md:px-24 justify-center">
      <div className="flex flex-col space-y-16">
        <div className="space-y-16 w-full flex flex-col items-center justify-center text-center">
          <div className="space-y-8 text-left w-full">
            <p className="text-5xl font-bold drop-shadow-xl">
              Featured Listing
            </p>
            <p className="text-xl font-bold">
              <span className="text-blue-500">Explore</span> the gretes places
              in your city. You won't be{" "}
              <span className="text-blue-500">disappointed.</span>
            </p>
          </div>
          <button className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4">
            {promotionListingData.map((items, index) => (
              <div key={index} className="border border-black overflow-hidden rounded-xl hover:scale-110 duration-300 hover:shadow-2xl mx-8">
                <div className="overflow-hidden">
                  <img
                    src={require(`../../assets/images/${items.image}`)}
                    height={300}
                    width={300}
                    alt="shop"
                  />
                  {/* <p className="text-xl font-semibold">SJ</p> */}
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
                      <p>
                        {items.ratingPerson} Rating : {items.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </button>
        </div>
        <div className="p-4">
          <Link to={"/categories"}>
            <button className="bg-blue-500 p-4 rounded">
              <p className="font-semibold text-xl text-white">Browse All</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PromotionListing;
