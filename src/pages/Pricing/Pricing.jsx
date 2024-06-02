import React from "react";

function Pricing() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl md:text-[250px] font-extrabold -rotate-2 text-black tracking-widest">
        FREE
      </h1>
      <div className="bg-blue-500 px-2 text-base md:text-3xl rounded rotate-12 mt-8 absolute">
        Completely Free
      </div>
    </div>
  );
}

export default Pricing;
