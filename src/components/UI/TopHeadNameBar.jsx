import React from "react";

function TopHeadNameBar({headName}) {
    
  return (
    <div className="h-48 bg-blue-200 items-center flex justify-center w-screen">
      <div className="space-y-3">
        <p className="text-5xl font-bold">{headName}</p>
        <p className="text-lg text-gray-500 font-semibold">
          Home {">"} {headName}
        </p>
      </div>
    </div>
  );
}

export default TopHeadNameBar;
