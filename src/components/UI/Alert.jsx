import React from "react";

const Alert = ({ message }) => {
  return (
    <div className="fixed top-24 right-12 animate-slide-in-left">
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Success!{" "}</strong>
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
