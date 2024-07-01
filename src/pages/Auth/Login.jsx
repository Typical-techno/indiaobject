import React, { useState } from "react";
import logo from "../../assets/images/objectindia-logo-main.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (email) => {
    let isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    setEmailError(isValidEmail ? "" : "Invalid email format");
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
              value={email}
              onChange={handleEmailChange}
            />
            <p className="text-left text-red-600 text-sm font-semibold m-2">
              {emailError}
            </p>
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

export default Login;
