import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/objectindia-logo-main.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [home, setHome] = useState("");
  const [categories, setCategories] = useState("");
  const [about, setAbout] = useState("");
  const [pricing, setPricing] = useState("");
  const [contact, setContact] = useState("");
  function activeByDefault() {
    if (
      location.pathname.includes("categories") ||
      location.pathname.includes("/c/")
    ) {
      setHome("");
      setCategories("bg-blue-500 text-white");
      setAbout("");
      setPricing("");
      setContact("");
    } else if (location.pathname.includes("about-us")) {
      setHome("");
      setCategories("");
      setAbout("bg-blue-500 text-white");
      setPricing("");
      setContact("");
    } else if (location.pathname.includes("pricing")) {
      setHome("");
      setCategories("");
      setAbout("");
      setPricing("bg-blue-500 text-white");
      setContact("");
    } else if (location.pathname.includes("contact-us")) {
      setHome("");
      setCategories("");
      setAbout("");
      setPricing("");
      setContact("bg-blue-500 text-white");
    } else {
      setHome("bg-blue-500 text-white");
      setCategories("");
      setAbout("");
      setPricing("");
      setContact("");
    }
  }
  useEffect(() => {
    activeByDefault();
  });
  const navItems = [
    {
      itemName: "Home",
      icon: "fi-rr-house-chimney",
      link: "",
      activeCss: home,
    },
    {
      itemName: "Categories",
      icon: "fi-rs-category",
      link: "categories",
      activeCss: categories,
    },
    {
      itemName: "About Us",
      icon: "fi-rr-users-alt",
      link: "about-us",
      activeCss: about,
    },
    {
      itemName: "Pricing",
      icon: "fi-sr-indian-rupee-sign",
      link: "pricing",
      activeCss: pricing,
    },
    {
      itemName: "Contact us",
      icon: "fi-ss-customer-service",
      link: "contact-us",
      activeCss: contact,
    },
  ];

  const btnItems = [
    {
      itemName: "Sign Up/Login",
      icon: "fi-bs-user",
      link: "login",
    },
    {
      itemName: "Add Listing",
      icon: "fi-bs-plus",
      link: "add-listing",
    },
  ];

  return (
    <div className="py-2 px-8 flex flex-col md:flex-row h-fit justify-center md:justify-between bg-white z-30 w-screen">
      <div className="flex items-center justify-center">
        <div className="flex md:hidden justify-start w-full items-center">
          {!open ? (
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              <i className="fi fi-br-bars-staggered mt-1"></i>
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <i className="fi fi-br-cross"></i>
            </button>
          )}
        </div>
        <div className="text-2xl md:text-5xl font-bold">
          <Link to="/">
            <button>
              <p className="flex items-center">
                <span className="text-blue-500">Object</span>India
                <span className="text-blue-500 h-12 w-12 mb-1">
                  <img src={logo} alt="logo" className="mt-1" />
                </span>
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center">
        {navItems.map((items) => (
          <div className="items-center">
            <Link to={`/${items.link}`}>
              <button className="flex flex-row space-x-4 p-2">
                <p className="mt-1">
                  <i className={`fi ${items.icon}`}></i>
                </p>
                <div>{items.itemName}</div>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-center items-center">
        {btnItems.map((items) => (
          <Link to={`/${items.link}`}>
            <button className="rounded bg-blue-500 p-3 m-2 hover:text-blue-500 hover:bg-white text-white hover:border-blue-500 border">
              <div className="flex space-x-4 items-center">
                <p className="mt-1">
                  <i class={`fi ${items.icon}`}></i>
                </p>
                <p className="font-semibold">{items.itemName}</p>
              </div>
            </button>
          </Link>
        ))}
      </div>
      <div className="flex md:hidden">
        {open ? (
          <div className="border border-[#1A2238] my-4 rounded-xl items-center flex flex-col w-screen h-screen animate-slide-in-left duration-150">
            <div className="py-4 flex justify-center items-center">
              {btnItems.map((items) => (
                <div className="flex flex-col justify-center items-center w-full">
                  <Link to={`/${items.link}`}>
                    <button className="rounded bg-blue-500 p-3 m-2 hover:text-blue-500 hover:bg-white text-white hover:border-blue-500 border">
                      <div className="flex space-x-4 items-center">
                        <p className="mt-1">
                          <i class={`fi ${items.icon}`}></i>
                        </p>
                        <p className="text-xs md:text-base font-semibold">
                          {items.itemName}
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="py-8 space-y-8 px-4 w-full">
              {navItems.map((items) => (
                <Link
                  to={`/${items.link}`}
                  className={`flex flex-col border w-full border-blue-500 justify-center active rounded-xl items-center ${items.activeCss}`}
                >
                  <button onClick={()=>{
                    setOpen(false);
                  }} className="items-center">
                    <div className="flex flex-row space-x-4 p-2 items-center">
                      <p className="mt-1">
                        <i className={`fi ${items.icon}`}></i>
                      </p>
                      <div>{items.itemName}</div>
                    </div>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
