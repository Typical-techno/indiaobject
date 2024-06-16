import React from "react";

function TopHeadNameBarItemsMain({ items }) {
  return (
    <div className="h-48 bg-blue-200 items-center flex justify-center">
      <div className="space-y-3">
        <p className="text-5xl font-bold">{items.name}</p>
        <p className="text-lg text-gray-500 font-semibold">
          Home {">"} {items.category.toUpperCase()} {">"} {items.name}
        </p>
      </div>
    </div>
  );
}

export default TopHeadNameBarItemsMain;
