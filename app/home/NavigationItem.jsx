import React from "react";

const NavigationItem = ({ label, icon: Icon, onClick, isSelected }) => {
  return (
    <li
      onClick={onClick}
      className={`hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer ease-in duration-150 ${
        isSelected ? "bg-accent text-white" : "bg-gray-200 hover:text-white"
      }`}
    >
      {label}
      <Icon size={24} />
    </li>
  );
};

export default NavigationItem;
