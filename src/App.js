import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";
import Home from "./pages/Home/home";
import AboutUs from "./pages/About-us/AboutUs";
import ContactUs from "./pages/Contact-us/ContactUs";
import Pricing from "./pages/Pricing/Pricing";
import Categories from "./pages/Categories/Categories";
import CategoriesSubListing from "./pages/Categories/CategoriesSubListing";
import LoginSignup from "./pages/Login-Signup/Login_Signup";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup", "/404"];

  return (
    <div className="App">
      <div className="fixed z-20">
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      </div>
      <div className="z-10 py-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/c/:categoriesId" element={<CategoriesSubListing />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
