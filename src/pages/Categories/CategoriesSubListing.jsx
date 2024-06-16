import React, { useEffect, useState } from "react";
import TopHeadNameBarCategories from "../../components/UI/TopHeadNameBarCategories";
import CategoriesListingItems from "./CategoriesListingItems";
import SearchBox from "../../components/UI/SearchBox";
import { searchItems } from "../../data/searchData";

function CategoriesSubListing() {
  const [headName, setHeadName] = useState();
  const categoryName = window.location.pathname.replace("/c/", "");
  useEffect(() => {
    let tempName = window.location.pathname.toUpperCase().replace("/C/", "");
    while (tempName.includes("-")) {
      tempName = tempName.replace("-", " ");
    }
    setHeadName(tempName);
  }, []);

  return (
    <div className="py-20">
      <TopHeadNameBarCategories headName={headName} />
      <div className="flex justify-center my-12">
        <div>
          <SearchBox searchItems={searchItems} />
        </div>
      </div>
      <div className="border flex justify-center">
        <div className="border w-3/12 p-8">
          <div className="flex flex-col border text-left p-4 rounded-xl bg-gray-100">
            <p className="text-xl font-semibold py-1">Filter</p>
            <div className="space-x-2 text-left text-yellow-500">
              <input type="checkbox" />
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
            </div>
            <div className="space-x-2 text-left text-yellow-500">
              <input type="checkbox" />
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-rr-star"></i>
            </div>
            <div className="space-x-2 text-left text-yellow-500">
              <input type="checkbox" />
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-rr-star"></i>
              <i class="fi fi-rr-star"></i>
            </div>
            <div className="space-x-2 text-left text-yellow-500">
              <input type="checkbox" />
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-rr-star"></i>
              <i class="fi fi-rr-star"></i>
              <i class="fi fi-rr-star"></i>
            </div>
            <div className="space-x-2 text-left text-yellow-500">
              <input type="checkbox" />
              <i class="fi fi-sr-star"></i>
              <i class="fi fi-rr-star"></i>
              <i class="fi fi-rr-star"></i>
              <i class="fi fi-rr-star"></i>
              <i class="fi fi-rr-star"></i>
            </div>
          </div>
        </div>
        <div className="w-full">
          <CategoriesListingItems categoryName={categoryName} />
        </div>
      </div>
    </div>
  );
}

export default CategoriesSubListing;
