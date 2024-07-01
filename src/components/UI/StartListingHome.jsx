import React from "react";

function StartListingHome() {
  return (
    <div className="py-20 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-2xl p-8 xl:p-11">
          <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">
            Get Started with ObjectIndia
          </h2>
          <p className="text-indigo-200 text-xl text-center mb-11 lg:max-w-2xl mx-auto">
            Add your business to our website to start earning and receiving more
            inquiries than usual.
          </p>
          <form className="gap-4 justify-center flex flex-col md:flex-row">
            <div className="w-full md:w-5/12">
              <input
                placeholder="Enter Your Email"
                type="email"
                className="focus:outline-0 w-full border rounded-xl p-4 text-base md:text-xl font-semibold"
              />
            </div>
            <button className="bg-blue-500 p-3 rounded-xl" type="submit">
              <p className="text-base text-white font-semibold">Get Started</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartListingHome;
