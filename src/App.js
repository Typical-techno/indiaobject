import "./App.css";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PromotionListing from "./components/PromotionListing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Hero />
        <Categories />
        <PromotionListing />
      </header>
      <Footer />
    </div>
  );
}

export default App;
