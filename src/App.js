import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/default/Navbar";
import Footer from "./components/default/Footer";
import Home from "./pages/Home/home";
import AboutUs from "./pages/About-us/about";
import ContactUs from "./pages/Contact-us/ContactUs";
import Pricing from "./pages/Pricing/Pricing";
import CategoriesHome from "./pages/Categories/CategoriesHome";
import CategoriesSubListing from "./pages/Categories/CategoriesSubListing";
import LoginSignup from "./pages/Login-Signup/Login_Signup";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/default/scrollToTop";
import CategoriesItemMainView from "./pages/Categories/CategoriesItemMainView";
import AddListingForm from './pages/Add-Listing/AddListingForm'

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup", "/not-found"];

  return (
    <div className="App">
      <ScrollToTop />
      <div className="fixed z-20">
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      </div>
      <div className="z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/categories" element={<CategoriesHome />} />
          <Route path="/c/:categoriesId" element={<CategoriesSubListing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/c" element={<Navigate to="/categories" replace />} />
          <Route path="/s/:Id" element={<CategoriesItemMainView />} />
          <Route path="/add-listing" element={<AddListingForm />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
