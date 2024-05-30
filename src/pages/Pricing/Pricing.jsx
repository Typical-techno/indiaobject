import React, { useEffect, useState } from "react";
import TopHeadNameBar from "../../components/UI/TopHeadNameBar";

function Pricing() {
  const [headName, setHeadName] = useState();

  useEffect(() => {
    let tempName = window.location.pathname.toUpperCase().replace("/", "");
    setHeadName(tempName);
  },[]);
  
  return (
    <div>
      <TopHeadNameBar headName={headName} />
    </div>
  );
}

export default Pricing;
