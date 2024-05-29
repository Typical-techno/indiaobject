import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";
import Home from "./components/Home/home";
import AboutUs from "./components/About-us/AboutUs";
import ContactUs from "./components/Contact-us/ContactUs";
import Pricing from "./components/Pricing/Pricing";
import Categories from "./components/Categories/Categories";
import CategoriesSubListing from "./components/Categories/CategoriesSubListing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/c/:categoriesId" element={<CategoriesSubListing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
