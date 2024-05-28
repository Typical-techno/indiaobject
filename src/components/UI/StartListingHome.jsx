import React from "react";

function StartListingHome() {
  return (
    <div className="my-12 flex w-8/12 rounded-xl items-center bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400">
      <div className="space-y-6 p-8 w-full">
        <p className="text-5xl text-white font-semibold text-left drop-shadow-2xl">
          Get Started with <span className="text-blue-500 drop-shadow-xl">Object</span>India
        </p>
        <p className="text-xl text-white font-semibold text-left">
          Add your business to our website to start earning and receiving more
          inquiries than usual.
        </p>
        <form className="space-x-4 justify-center flex">
          <div className="w-9/12">
            <input
              placeholder="Enter Your Email"
              type="email"
              className="focus:outline-0 w-full border rounded-xl p-4 text-xl font-semibold"
            />
          </div>
          <button className="bg-blue-500 p-4 rounded" type="submit">
            <p className="text-base font-semibold">Get Started</p>
          </button>
        </form>
      </div>
      <div className="flex w-full">
        <div className="space-y-4 p-8">
          <p className="bg-blue-500 w-fit p-4 pb-2 rounded-lg">
            <i className="fi fi-rr-chat-arrow-grow px-1 text-white"></i>
          </p>
          <p className="text-base text-white text-left font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fugit
            a laboriosam in, natus neque, blanditiis molestias, beatae nihil
            quos adipisci molestiae repellat id quaerat!
          </p>
        </div>
        <div className="space-y-4 p-8">
          <p className="bg-blue-500 w-fit p-4 pb-2 rounded-lg">
            <i className="fi fi-rr-indian-rupee-sign px-1 text-white"></i>
          </p>
          <p className="text-base text-white text-left font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fugit
            a laboriosam in, natus neque, blanditiis molestias, beatae nihil
            quos adipisci molestiae repellat id quaerat!
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartListingHome;
