import Categories from "./CategoriesHome";
import Hero from "./Hero";
import HowItWorks from "../../components/UI/HowItWorks";
import StartListingHome from "../../components/UI/StartListingHome";
import "../../App.css";
import PromotionListing from "./PromotionListing";

function Home() {
  return (
    <header className="App-header py-20">
      <Hero />
      <Categories />
      <PromotionListing />
      <HowItWorks />
      <StartListingHome />
    </header>
  );
}

export default Home;
