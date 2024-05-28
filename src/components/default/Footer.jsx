import React from "react";
import { Link } from "react-router-dom";
import { accLink, useLink, socialLink, contactLink } from "../../data/footer";

function Footer() {

  return (
    <div className="grid grid-cols-7 px-8 py-28 bg-gray-800">
      <div></div>
      <div className="space-y-6 text-left text-white">
        <div>
          <Link to="/">
            <button className="text-5xl font-bold">
              <p>
                <span className="text-blue-500">ER</span>ohtak
                <span className="text-blue-500">.</span>
              </p>
            </button>
          </Link>
        </div>
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
  );
}

export default Footer;
