import React, { useState } from "react";
import logo from "../../assets/images/objectindia-logo-main.png";
import { Link } from "react-router-dom";

function LoginSignup() {
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleTextChange = (e) => {
    validateName(e.target.value);
    setFullName(e.target.value);
  };

  const validateName = (text) => {
    let isValidName = text.match(/^[a-z A-Z]*$/);
    setNameError(
      isValidName
        ? ""
        : "Name should not contain any number or speacial character"
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (email) => {
    let isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    setEmailError(isValidEmail ? "" : "Invalid email format");
  };

  if (window.location.pathname === "/login") {
    return (
      <div className="bg-slate-900 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full shadow-slate-500">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-gray-200 rounded-full p-3">
              <img src={logo} alt="logo" height={60} width={60} />
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Login to your account
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold m-2 text-left"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500"
                required
                placeholder="hello@objectindia.com"
                onChange={handleEmailChange}
              />
              <p className="text-left text-red-600 text-sm font-semibold m-2">
                {emailError}
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold m-2 text-left"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500"
                required
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
            <p className="text-gray-600 text-xs text-center mt-4">
              Don't have account ?{" "}
              <Link to={"/signup"} className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }

  console.log(email + fullName);

  return (
    <div className="bg-slate-900 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full shadow-slate-500">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <img src={logo} alt="logo" height={60} width={60} />
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create a new account
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-semibold m-2 text-left"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500`}
              required
              placeholder="Object India"
              onChange={handleTextChange}
            />
            <p className="text-left text-red-600 text-sm font-semibold m-2">
              {nameError}
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold m-2 text-left"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500"
              required
              placeholder="hello@objectindia.com"
              onChange={handleEmailChange}
            />
            <p className="text-left text-red-600 text-sm font-semibold m-2">
              {emailError}
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold m-2 text-left"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500"
              required
              placeholder="••••••••"
            />
            <p className="text-gray-600 text-xs mt-1">
              Must contain 1 uppercase letter, 1 number, min. 8 characters.
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
          <p className="text-gray-600 text-xs text-center mt-4">
            Already have Account ?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
            .
          </p>
          <p className="text-gray-600 text-xs text-center mt-4">
            By clicking Register, you agree to accept Object India's<br></br>
            <Link to={'/terms-and-condition'} className="text-blue-500 hover:underline">
              Terms and Conditions
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
