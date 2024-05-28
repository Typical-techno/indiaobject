import React from "react";

function SearchBox() {
  const searchItems = [
    {
      id: "keywords",
      label: "Keywords",
      placeholder: "What are you looking for?",
      icon: "fi-bs-search",
      border: "border-l-0",
    },
    {
      id: "where",
      label: "Where",
      placeholder: "City or Pincode",
      icon: "fi-bs-marker",
      border: "border-l-2",
    },
    {
      id: "category",
      label: "Category",
      placeholder: "Select Category",
      icon: "fi-bs-category",
      border: "border-l-2",
    },
  ];

  return (
    <form
      onSubmit={() => {
        alert("Form Submitted");
      }}
      className="border border-black bg-white flex rounded-xl shadow-2xl p-4 gap-6 justify-between"
    >
      {searchItems.map((items) => (
        <label
          className={`flex flex-col text-left text-xl font-semibold ${items.border} border-gray-400 px-2`}
        >
          {items.label}
          <div className="flex items-center">
            <input
              id={`${items.id}`}
              placeholder={`${items.placeholder}`}
              className="text-xl p-2 focus:outline-0"
            ></input>
            <p className="mt-1">
              <i className={`fi ${items.icon}`}></i>
            </p>
          </div>
        </label>
      ))}
      <button type="submit" className="bg-blue-500 rounded-xl p-4 text-white">
        <div className="flex items-center space-x-4">
          <p className="text-xl font-semibold">Search</p>
          <p className="text-base mt-1">
            <i class="fi fi-br-search"></i>
          </p>
        </div>
      </button>
    </form>
  );
}

export default SearchBox;
