import React from "react";
import Link from "next/link";
import HomeNavbar from "./HomeNavbar";
import Navigation from "./Navigation";
import data from "./data";
import LostCard from "./LostCard";

const page = () => {
  console.log(data[data.id]);
  return (
    <div className="flex">
      {/*home components */}
      <Navigation />
      <div className="grid lg:grid-cols-3 mx-auto mt-0 md:grid-cols-2 sm:grid-cols-1">
        {data.map((item) => {
          return (
            <div key={item.id} className="">
              <LostCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
