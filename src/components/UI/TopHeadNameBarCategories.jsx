import React from "react";
import { Link } from "react-router-dom";

function TopHeadNameBarCategories({ headName }) {
  const headLine = headName;
  return (
    <div className="h-48 bg-blue-200 items-center flex justify-center">
      <div className="space-y-3">
        <p className="text-5xl uppercase font-bold">
          {"LISTING BY"} {headName}
        </p>
        <p className="text-lg text-gray-500 font-semibold">
          <Link to={"/"}>HOME</Link> {">"} <Link to={"/categories"}>CATEGORIES</Link> {">"}{" "} <Link to={`/c/${headLine}`} className="uppercase">{headName}</Link>
        </p>
      </div>
    </div>
  );
}

export default TopHeadNameBarCategories;
