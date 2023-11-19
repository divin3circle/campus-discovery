import React from "react";
import { FcSearch } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between my-8 p-4 ">
      {/**Logo */}
      <div>
        <Link className="flex cursor-pointer justify-center" href="/">
          <FcSearch size={40} />
          <h1 className="font-bold text-xl flex  md:text-2xl">
            Campus <span className="text-accent">Discovery</span>
          </h1>
        </Link>
      </div>
      {/**Github */}
      <div className="">
        <a
          href="https://github.com/divin3circle/campus-discovery"
          target="_blank"
        >
          <button className="flex items-center justify-center gap-2 bg-trasparent p-1 md:py-2 md:px-4 rounded-md hover:shadow-xl hover:bg-accent border-[1px] hover:text-white border-primary shadow-accent ease-in duration-150">
            <FaGithub size={34} />
            <span className="font-normal md:text-xl"> Github</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
