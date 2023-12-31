"use client";

import React, { useState } from "react";
import { FaQuestion, FaSchool } from "react-icons/fa";
import { MdPhonelink, MdOutlineCreditCard, MdMenuBook } from "react-icons/md";
import { IoIosBusiness } from "react-icons/io";
import { ImOffice } from "react-icons/im";
import { SiLibrarything } from "react-icons/si";
import NavigationItem from "./NavigationItem";
import { initialState, reducer } from "./reducer";
import { FaPlus } from "react-icons/fa";

const Navigation = ({ showFilters }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
    /*   if (showFilters) {
      dispatch({ type: "show" });
    } */
  };

  const itemTypes = [
    { label: "Electronics", icon: MdPhonelink },
    { label: "ID Cards", icon: MdOutlineCreditCard },
    { label: "Stationeries", icon: MdMenuBook },
  ];

  const itemLocations = [
    { label: "Library", icon: SiLibrarything },
    { label: "Eng. School", icon: FaSchool },
    { label: "Business School", icon: IoIosBusiness },
    { label: "Resource Center", icon: ImOffice },
    { label: "Other", icon: FaQuestion },
  ];

  return (
    <>
      {/**mobile nav */}
      <nav
        className={`md:hidden bg-white absolute h-full w-full ${
          showFilters ? "" : "hidden"
        }`}
      >
        <div>
          <div className="p-2 my-4">
            <h1 className="text-lg font-semibold">By Type</h1>
            <ul>
              {itemTypes.map((item, index) => (
                <NavigationItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  isSelected={selectedItem === item.label}
                  onClick={() => handleItemClick(item.label)}
                />
              ))}
            </ul>
          </div>
          <div className="p-2 my-4">
            <h1 className="text-lg font-semibold">By Location</h1>
            <ul>
              {itemLocations.map((item, index) => (
                <NavigationItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  isSelected={selectedItem === item.label}
                  onClick={() => handleItemClick(item.label)}
                />
              ))}
            </ul>
          </div>
          <div>
            <NavigationItem label="Add Item" icon={FaPlus} onClick={() => {}} />
          </div>
        </div>
      </nav>

      {/**responsive nav */}
      <div className=" w-5/12 lg:w-4/12 p-2 hidden md:block">
        <div>
          <div className="p-2 my-4">
            <h1 className="text-lg font-semibold">By Type</h1>
            <ul>
              {itemTypes.map((item, index) => (
                <NavigationItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  isSelected={selectedItem === item.label}
                  onClick={() => handleItemClick(item.label)}
                />
              ))}
            </ul>
          </div>
          <div className="p-2 my-4">
            <h1 className="text-lg font-semibold">By Location</h1>
            <ul>
              {itemLocations.map((item, index) => (
                <NavigationItem
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  isSelected={selectedItem === item.label}
                  onClick={() => handleItemClick(item.label)}
                />
              ))}
            </ul>
          </div>
          <div>
            <NavigationItem label="Add Item" icon={FaPlus} onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
