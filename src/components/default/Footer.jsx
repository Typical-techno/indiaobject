import React from "react";
import { Link } from "react-router-dom";
import { accLink, useLink, socialLink, contactLink } from "../../data/footer";
import logo from "../../assets/images/objectindia-logo-main.png";

function Footer() {
  return (
    <div className="px-8 py-12 bg-gray-800 space-y-4">
      <div className="grid grid-cols-7 py-16">
        <div></div>
        <div className="text-left text-white w-max">
          <div className="w-4/12 space-y-6">
            <Link to="/">
              <button className="text-5xl font-bold">
                <p className="flex items-center">
                  <span className="text-blue-500">
                    <span className="text-4xl">
                      <i className="fi fi-rr-globe"></i>
                    </span>
                    bject
                  </span>
                  India
                  <span className="text-blue-500 flex">
                    <img src={logo} height={50} width={50} className="mt-1" />{" "}
                  </span>
                </p>
              </button>
            </Link>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                maiores minus eaque sequi, quo voluptas harum totam nostrum et
                eveniet dignissimos suscipit ullam id cum.
              </p>
            </div>
            <div className="flex items-center">
              {socialLink.map((items) => (
                <div className="flex flex-row">
                  <a href={`${items.link}`}>
                    <button className="px-2">
                      <p className="text-3xl">
                        <i className={`fi ${items.icon}`}></i>
                      </p>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <div className="text-left space-y-4 text-white">
          <div className="w-fit">
            <p className="font-bold text-2xl text-white border-b-2 border-blue-500">
              Usefull Links
            </p>
          </div>
          <div>
            {useLink.map((items) => (
              <div className="items-center mx-2 py-1">
                <Link to={`/${items.link}`}>
                  <div className="flex gap-2">
                    <p className="mt-1">
                      <i class="fi fi-rr-angle-double-small-right"></i>
                    </p>
                    <p className="font-semibold">{items.linkName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-left space-y-4 text-white">
          <div className="w-fit">
            <p className="font-bold text-2xl text-white border-b-2 border-blue-500">
              My Account
            </p>
          </div>
          <div>
            {accLink.map((items) => (
              <div className="items-center mx-2 py-1">
                <Link to={`/${items.link}`}>
                  <div className="flex gap-2">
                    <p className="mt-1">
                      <i class="fi fi-rr-angle-double-small-right"></i>
                    </p>
                    <p className="font-semibold">{items.linkName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-left space-y-4 text-white">
          <div className="w-fit">
            <p className="font-bold text-2xl text-white border-b-2 border-blue-500">
              Contact Us
            </p>
          </div>
          <div>
            {contactLink.map((items) => (
              <div className="items-center mx-2 py-1">
                <a href={`${items.link}`}>
                  <div className="flex gap-2">
                    <p className="mt-1">
                      <i class={`fi ${items.linkIcon}`}></i>
                    </p>
                    <p className="font-semibold">{items.linkName}</p>
                  </div>
                  <p className="pl-6">{items.linkDesc}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="text-base text-white">
        <p>
          &copy; Copyright <span className="font-bold">ObjectIndia</span>. All
          Rights Reserved
        </p>
        <p>
          Developed with &#9829; By{" "}
          <a
            href="https://linkedin.com/in/shubhamjangradev/"
            className="font-semibold"
          >
            Shubham Jangra
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
