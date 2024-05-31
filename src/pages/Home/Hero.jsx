import React from "react";
import img2 from "../../assets/images/hero-vector-2.jpg";
import SearchBox from "../../components/UI/SearchBox";

function Hero() {
  return (
    <div className="flex w-11/12 h-full py-36 px-2 md:px-24 relative items-center justify-center xl:justify-normal z-10">
      <div className="space-y-16 z-20">
        <div className="space-y-12">
          <p className="text-5xl font-bold text-left">
            Join us & Explore Thousands of<br></br>
            <span className="text-blue-500">Places</span> /{" "}
            <span className="text-blue-500">Shops</span>
          </p>
          <p className="text-xl font-bold text-left">
            Find the place you want and search the best place.<br></br>
            <span className="text-blue-500">Everything</span> is here
            <span className="text-blue-500">.</span>
          </p>
        </div>
        <div className="space-y-4 z-10">
          <SearchBox />
          <div>
            <p className="text-base font-semibold text-left p-4">
              Popular Search:
              <span className="text-gray-500">
                {" "}
                Electornics, Mobiles, Schools, Colleges, Government Offices
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="z-10 absolute right-0 bottom-24 hidden xl:flex">
        <img src={img2} height={900} width={900} alt="Background" />
      </div>
    </div>
  );
}

export default Hero;
