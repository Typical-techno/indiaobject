import React, { useEffect, useState } from "react";
import TopHeadNameBarCategories from "../../components/UI/TopHeadNameBarCategories";
import CategoriesListingItems from "./CategoriesListingItems";
import SearchBox from "../../components/UI/SearchBox";

function CategoriesSubListing() {
  const [headName, setHeadName] = useState();
  const categoryName = window.location.pathname.replace("/c/", "");

  useEffect(() => {
    let tempName = window.location.pathname.toUpperCase().replace("/C/", "");
    while (tempName.includes("-")) {
      tempName = tempName.replace("-", " ");
    }
    setHeadName(tempName);
  },[]);

  return (
    <div>
      <TopHeadNameBarCategories headName={headName} />
      <div className="flex justify-center my-12">
        <div>
          <SearchBox />
        </div>
      </div>
      <CategoriesListingItems categoryName={categoryName} />
    </div>
  );
}

export default CategoriesSubListing;
