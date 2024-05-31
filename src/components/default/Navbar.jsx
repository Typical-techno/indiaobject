import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/objectindia-logo-main.png";

function Navbar() {
  const navItems = [
    {
      itemName: "Home",
      icon: "fi-rr-house-chimney",
      link: "",
    },
    {
      itemName: "Categories",
      icon: "fi-rs-category",
      link: "categories",
    },
    {
      itemName: "About Us",
      icon: "fi-rr-users-alt",
      link: "about-us",
    },
    {
      itemName: "Pricing",
      icon: "fi-sr-indian-rupee-sign",
      link: "pricing",
    },
    {
      itemName: "Contact us",
      icon: "fi-ss-customer-service",
      link: "contact-us",
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
    <div className="py-2 px-8 flex justify-center md:justify-between">
      <div className="flex items-center justify-center">
        <div className="text-2xl md:text-5xl font-bold">
          <Link to="/">
            <button>
              <p className="flex items-center">
                <span className="text-blue-500">Object</span>India
                <span className="text-blue-500">
                  <img
                    src={logo}
                    height={50}
                    width={50}
                    alt="logo"
                    className="mt-1"
                  />
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
    </div>
  );
}

export default Navbar;
