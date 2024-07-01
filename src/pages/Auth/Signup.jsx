import React, { useState } from "react";
import logo from "../../assets/images/objectindia-logo-main.png";
import { Link } from "react-router-dom";

function Signup() {
  const [userName, setUserName] = useState("");
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleTextChange = (e) => {
    validateName(e.target.value);
    setUserName(e.target.value);
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

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    validatePhoneNumber(e.target.value);
  };

  const validatePhoneNumber = (phone) => {
    // Regular expression to validate Indian phone numbers
    let isValidPhone = /^[6-9]\d{9}$/.test(phone); // Matches 10 digit numbers starting with 6, 7, 8, or 9
    setPhoneNumberError(isValidPhone ? "" : "Invalid phone number format");
  };

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
              Full Name <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500`}
              required
              placeholder="Object India"
              value={userName}
              onChange={handleTextChange}
            />
            <p className="text-left text-rose-600 text-xs mt-1">{nameError}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold m-2 text-left"
            >
              Email Address <span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500"
              placeholder="hello@objectindia.com"
              value={email}
              onChange={handleEmailChange}
            />
            <p className="text-left text-rose-600 text-xs mt-1">{emailError}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="tel"
              className="block text-gray-700 text-sm font-semibold m-2 text-left"
            >
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <input
              type="tel"
              id="tel"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-blue-500"
              required
              placeholder="9999999999"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <p className="text-left text-rose-600 text-xs mt-1">
              {phoneNumberError}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send OTP
          </button>
          <p className="text-gray-600 text-xs text-center mt-4">
            Already have Account ?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
            .
          </p>
          {/* <p className="text-gray-600 text-xs text-center mt-4">
            By clicking Register, you agree to accept Object India's<br></br>
            <Link
              to={"/terms-and-condition"}
              className="text-blue-500 hover:underline"
            >
              Terms and Conditions
            </Link>
            .
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
