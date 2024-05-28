import React from "react";
// import img1 from "../assets/images/hero-vector.jpg";
import img2 from "../assets/images/hero-vector-2.jpg";

function Hero() {
  const searchItems = [
    {
      id: "keywords",
      label: "Keywords",
      placeholder: "What are you looking for?",
      icon: "fi-bs-search",
      border: "border-l-0",
    },
    {
      id: "where",
      label: "Where",
      placeholder: "City or Pincode",
      icon: "fi-bs-marker",
      border: "border-l-2",
    },
    {
      id: "category",
      label: "Category",
      placeholder: "Select Category",
      icon: "fi-bs-category",
      border: "border-l-2",
    },
  ];

  return (
    <div className="flex w-11/12 h-full py-36 px-24 relative items-center">
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
        <div className="space-y-4">
          <form
            onSubmit={() => {
              alert("Form Submitted");
            }}
            className="border border-black bg-white flex rounded-xl shadow-2xl p-4 gap-6"
          >
            {searchItems.map((items) => (
              <label
                className={`flex flex-col text-left text-xl font-semibold ${items.border} border-gray-400 px-2`}
              >
                {items.label}
                <div className="flex items-center">
                  <input
                    id={`${items.id}`}
                    placeholder={`${items.placeholder}`}
                    className="text-xl p-2 focus:outline-0"
                  ></input>
                  <p className="mt-1">
                    <i className={`fi ${items.icon}`}></i>
                  </p>
                </div>
              </label>
            ))}
            <button
              type="submit"
              className="bg-blue-500 rounded-xl p-4 text-white"
            >
              <div className="flex items-center space-x-4">
                <p className="text-xl font-semibold">Search</p>
                <p className="text-base mt-1">
                  <i class="fi fi-br-search"></i>
                </p>
              </div>
            </button>
          </form>
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
      <div className="z-10 absolute right-0 bottom-24">
        <img src={img2} height={900} width={900}/>
      </div>
    </div>
  );
}

export default Hero;
