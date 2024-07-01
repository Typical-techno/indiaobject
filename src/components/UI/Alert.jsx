import React from "react";

const Alert = ({ message, bg, text, border }) => {
  return (
    <div className="fixed top-24 right-12 animate-slide-in-left">
      <div
        className={`${bg} border ${border} ${text} px-4 py-3 rounded relative`}
        role="alert"
      >

        <strong className="font-bold">Success!{" "}</strong>
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
