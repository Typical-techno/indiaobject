import React, { useState } from "react";

const DropdownFilter = ({ placeholder, id, onSelect, keywords, category, where }) => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropItem, setDropItem] = useState();

  const getFilteredItems = (inputValue) => {
    if (id === "keywords") {
      let newWords = keywords.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      return newWords;
    }
    if (id === "where") {
      let newWords = where.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      return newWords;
    }
    if (id === "category") {
      let newWords = category.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      return newWords;
    }
    return [];
  };

  const handleFocus = () => {
    setDropdownVisible(true);
    setDropItem(getFilteredItems(inputValue));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setDropItem(getFilteredItems(value));
    onSelect(value);
  };

  const handleBlur = () => {
    setDropdownVisible(false); // Delay to allow click events to register
  };

  const handleItemClick = (item) => {
    setInputValue(item);
    setDropdownVisible(false);
    onSelect(item);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full p-2 focus:rounded-t-xl focus:outline-0 focus:border border-black focus:border-t-0 focus:border-b-0 text-gray-500"
          placeholder={placeholder}
        />
        {/* <p className="cursor-pointer" onClick={()=>{
          setInputValue("");
        }}>X</p> */}
      </div>
      {dropdownVisible && (
        <ul
          className="absolute top-full left-0 right-0 border border-black border-t-0 overflow-y-auto z-10 bg-white max-h-40 rounded-b-2xl"
          style={{ scrollbarWidth: "none" }}
        >
          {dropItem.map((item, index) => (
            <li
              key={index}
              onMouseDown={() => handleItemClick(item)}
              className="p-2 cursor-pointer"
            >
              {item}
            </li>
          ))}
          {dropItem.length === 0 && <li className="p-2">No items found</li>}
        </ul>
      )}
    </div>
  );
};

export default DropdownFilter;
