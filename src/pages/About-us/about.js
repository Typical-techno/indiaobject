import React from "react";
import HowItWorks from "../../components/UI/HowItWorks";
import StartListingHome from "../../components/UI/StartListingHome";
import AboutUsHome from "./AboutUsHome";

function About() {
  return (
    <header className="flex justify-center flex-col items-center pt-16">
      <AboutUsHome />
      <HowItWorks />
      <StartListingHome />
    </header>
  );
}

export default About;
