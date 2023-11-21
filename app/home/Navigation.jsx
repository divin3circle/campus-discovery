import React from "react";
import { FaQuestion, FaSchool } from "react-icons/fa";
import { MdPhonelink, MdOutlineCreditCard, MdMenuBook } from "react-icons/md";
import { IoIosBusiness, IoLibrary } from "react-icons/io";
import { ImOffice } from "react-icons/im";
import { SiLibrarything } from "react-icons/si";

const Navigation = () => {
  return (
    <div className="bg-primar w-5/12 lg:w-4/12 p-2 hidden md:block">
      <div>
        {/* 
        <h1 className="text-2xl font-bold text-center">Navigation</h1> */}
        {/*category one */}
        <div className="p-2 my-4">
          <h1 className="text-lg font-semibold">By Type</h1>
          <ul className="">
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              Electronics
              <MdPhonelink size={24} />
            </li>
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              ID Cards
              <MdOutlineCreditCard size={24} />
            </li>
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              Stationeries
              <MdMenuBook size={24} />
            </li>
          </ul>
        </div>
        {/*category two */}
        <div className="p-2 my-4">
          <h1 className="text-lg font-semibold">By Location</h1>
          <ul className="">
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              Library
              <SiLibrarything size={24} />
            </li>
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              Eng. School
              <FaSchool size={24} />
            </li>
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              Business School
              <IoIosBusiness size={24} />
            </li>
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              Resource Center
              <ImOffice size={24} />
            </li>
            <li className="hover:bg-accent my-2 flex justify-center items-center gap-2 rounded-lg py-2 px-2 font-semibold cursor-pointer bg-gray-200 hover:text-white ">
              Other
              <FaQuestion size={24} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
