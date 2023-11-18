import React from "react";
import { FcSearch } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between my-8 p-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 rounded-xl shadow-accent">
      {/**Logo */}
      <div className="flex justify-center">
        <FcSearch size={40} />
        <h1 className="font-bold text-2xl">
          Campus <span className="text-accent">Discovery</span>
        </h1>
      </div>
      {/**Github */}
      <div className="">
        <a href="https://github.com/divin3circle" target="_blank">
          <button className="flex items-center justify-center gap-2 bg-primary py-2 px-4 rounded-md hover:shadow-xl hover:bg-transparent border-[1px] border-primary shadow-accent ease-in duration-150">
            <FaGithub size={34} />
            <span className="font-normal text-xl"> Github</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
