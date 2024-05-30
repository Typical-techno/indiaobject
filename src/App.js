import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";
import Home from "./pages/Home/home";
import AboutUs from "./pages/About-us/AboutUs";
import ContactUs from "./pages/Contact-us/ContactUs";
import Pricing from "./pages/Pricing/Pricing";
import Categories from "./pages/Categories/Categories";
import CategoriesSubListing from "./pages/Categories/CategoriesSubListing";

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
