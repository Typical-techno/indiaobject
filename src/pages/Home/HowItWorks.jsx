import React from "react";

function HowItWorks() {
  return (
    <div className="flex w-11/12 h-full py-24 px-2 md:px-24 justify-center">
      <div className="flex flex-col space-y-16 w-full">
        <div className="space-y-16 flex flex-col text-center">
          <div className="space-y-8 text-left">
            <p className="text-5xl font-bold drop-shadow-xl">How It Works?</p>
            <p className="text-xl font-bold">
              <span className="text-blue-500">Explore</span> the gretes places
              in your city. You won't be{" "}
              <span className="text-blue-500">disappointed.</span>
            </p>
          </div>
          <div className="flex flex-col justify-center xl:flex-row gap-12 items-center p-8">
            <div className="w-full p-12 break-words flex justify-center flex-col items-center space-y-6 rounded-xl hover:scale-110 duration-300 shadow-2xl border border-gray-300">
              <p className="rounded-xl bg-blue-200 w-fit p-6 pt-9">
                <i className="fi fi-rr-category p-4 text-blue-500 text-6xl mt-1"></i>
              </p>
              <p className="text-2xl font-semibold">
                Choose a Category to Start
              </p>
              <p className="text-base font-semibold text-gray-500">
                Locate all the information and answers you need in one
                convenient place to get started.
              </p>
            </div>
            <div className="w-full p-12 break-words flex justify-center flex-col items-center space-y-6 rounded-xl hover:scale-110 duration-300 shadow-2xl border border-gray-300">
              <p className="rounded-xl bg-blue-200 w-fit p-6 pt-9">
                <i className="fi fi-rr-features p-4 text-blue-500 text-6xl mt-1"></i>
              </p>
              <p className="text-2xl font-semibold">
                Explore Over Thousands Company List
              </p>
              <p className="text-base font-semibold text-gray-500">
                Perform an extensive and detailed search for every query you
                have in mind, covering all relevant aspects.
              </p>
            </div>
            <div className="w-full p-12 break-words flex justify-center flex-col items-center space-y-6 rounded-xl hover:scale-110 duration-300 shadow-2xl border border-gray-300">
              <p className="rounded-xl bg-blue-200 w-fit p-6 pt-9">
                <i className="fi fi-rr-search-alt p-4 text-blue-500 text-6xl mt-1"></i>
              </p>
              <p className="text-2xl font-semibold">
                Find the Most Suitable Candidate
              </p>
              <p className="text-base font-semibold text-gray-500">
                Gather comprehensive information for each and every question you
                have to identify the most suitable candidate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
