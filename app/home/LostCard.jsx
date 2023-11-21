import React from "react";
import { FaLocationPin } from "react-icons/fa6";

const LostCard = ({ data }) => {
  return (
    <div className="m-2">
      <a
        href="#"
        className="block rounded-lg p-4 shadow-sm hover:scale-105 ease-in duration-150 shadow-indigo-100"
      >
        <img
          alt={data.title}
          src={data.imageUrl}
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dd className="font-medium">{data.title}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-between gap-4 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaLocationPin size={16} className="text-accent" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Category</p>

                <p className="font-medium">{data?.category}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Location</p>

                <p className="font-medium">{data.location}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default LostCard;
