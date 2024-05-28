import React from "react";
import img from "../assets/images/hero-vector.jpg";

function PromotionListing() {
  return (
    <div className="flex w-11/12 h-full py-36 px-24">
      <div className="space-y-16 w-full text-center">
        <div className="space-y-8 justify-center items-center flex flex-col">
          <p className="text-5xl font-bold drop-shadow-xl">Featured Listing</p>
          <p className="text-xl font-bold">
            <span className="text-blue-500">Explore</span> the gretes places in
            your city. You won't be{" "}
            <span className="text-blue-500">disappointed.</span>
          </p>
        </div>
        <div className="border border-black p-4 rounded-xl">
          <div className="border w-fit">
            <img src={img} height={250} width={250} />
            <div className="bg-blue-500 w-fit p-4 rounded-full border border-black"><p className="text-xl font-semibold">SJ</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionListing;
