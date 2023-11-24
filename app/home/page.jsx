"use client";
import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import LostCard from "./LostCard";
import data from "./data";
import { init } from "aos";
import { initialState, reducer } from "./reducer";

const page = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <div className=" flex justify-center items-center md:hidden">
        <button
          className="bg-accent text-white rounded-lg px-4 py-2 text-xl hover:bg-transparent hover:border-[2px] hover:border-accent hover:text-text ease-in duration-150 mt-2 mb-8"
          onClick={() => dispatch({ type: "show" })}
        >
          {`${state.showFilter ? "Hide" : "Show"} Filters`}
        </button>
      </div>
      <div className="flex">
        {/*home components */}
        <Navigation showFilters={state.showFilter} />
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
    </>
  );
};

export default page;
