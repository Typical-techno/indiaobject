import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/objectindia-logo-main.png"

function Navbar() {
  const navItems = [
    {
      itemName: "Home",
      icon: "fi-rr-house-chimney",
      link: "",
    },
    {
      itemName: "About Us",
      icon: "fi-rr-users-alt",
      link: "about-us",
    },
    {
      itemName: "Categories",
      icon: "fi-rs-category",
      link: "categories",
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
    <div className="grid grid-cols-3 py-2">
      <div className="flex items-center justify-center">
        <div className="text-5xl font-bold">
          <Link to="/">
            <button>
              <p className="flex items-center">
                <span className="text-blue-500"><span className="text-4xl"><i className="fi fi-rr-globe"></i></span>bject</span>India
                <span className="text-blue-500"><img src={logo} height={50} width={50} className="mt-1" /></span>
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
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
      <div className="flex justify-center items-center">
        {btnItems.map((items) => (
          <button className="rounded bg-blue-500 p-3 m-2 hover:text-blue-500 hover:bg-white text-white hover:border-blue-500 border">
              <Link to={`/${items.link}`}>
              <div className="flex space-x-4 items-center">
                <p className="mt-1">
                  <i class={`fi ${items.icon}`}></i>
                </p>
                <p className="font-semibold">{items.itemName}</p>
              </div>
          </Link>
            </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
