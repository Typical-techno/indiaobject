import React from "react";

function TopHeadNameBarCategories({ headName }) {
  return (
    <div className="h-48 bg-blue-200 items-center flex justify-center">
      <div className="space-y-3">
        <p className="text-5xl font-bold">
          {"LISTING BY"} {headName}
        </p>
        <p className="text-lg text-gray-500 font-semibold">
          Home {">"} {"Categories"} {">"} {headName}
        </p>
      </div>
    </div>
  );
}

export default TopHeadNameBarCategories;
