import React from "react";
import { Link } from "react-router-dom";

function TopHeadNameBar({ headName }) {
  return (
    <div className="h-48 bg-blue-200 items-center flex justify-center w-full">
      <div className="space-y-3">
        <p className="text-5xl font-bold uppercase">{headName}</p>
        <p className="text-lg text-gray-500 font-semibold">
          <Link to={"/"}>HOME</Link> {">"}{" "}
          <Link to={`/${headName}`} className="uppercase">
            {headName}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default TopHeadNameBar;
