import Categories from "./CategoriesHome";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import StartListingHome from "../UI/StartListingHome";
import "../../App.css";
import PromotionListing from "./PromotionListing";

function Home() {
  return (
    <header className="App-header">
      <Hero />
      <Categories />
      <PromotionListing />
      <HowItWorks />
      <StartListingHome />
    </header>
  );
}

export default Home;
