import Image from "next/image";
import Link from "next/link";
import SplineContainer from "./spline";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <>
      <div className="md:flex p-4 mt-16 justify-between block ">
        <div className="flex items-center justify-center xs:p-0 md:p-4">
          <SplineContainer />
        </div>
        <div className="">
          <h1 className="text-center font-semibold text-4xl">
            Find your misplaced items{" "}
            <span className="text-accent font-bold">effortlessly</span>
          </h1>
          <p className="p-2 text-xl leading-relaxed text-center mt-8">
            Rediscover your misplaced items around the campus effortlessly,
            effortlessly reclaiming and reconnecting with those lost possessions
            that hold immense value and are essential in your daily life.
          </p>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-primary py-2 px-4 rounded-lg text-xl hover:shadow-xl shadow-accent hover:scale-110 ease-in duration-150 text-white hover:bg-transparent hover:text-text border-[1px] border-primary">
              Get started
            </button>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
}
