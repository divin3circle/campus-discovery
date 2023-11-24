/* import Image from "next/image";*/
import Link from "next/link";
import SplineContainer from "./spline";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Stats from "./Stats";
import hero from "../public/hero.png";

export default function Home() {
  return (
    <>
      <div className="md:flex p-4 mt-16  justify-between block ">
        <div className="flex justify-center items-center ">
          <div>
            {/* <SplineContainer /> */}
            <img
              alt="hero"
              src="https://img.freepik.com/vecteurs-premium/concept-bagage-perdu-trouve-personnages-voyageurs-reclament-bagages-tapis-roulant-bureau-aeroport-passagers-contraries_87771-15414.jpg?w=2000"
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-semibold text-xl md:text-4xl">
            Find your misplaced items{" "}
            <span className="text-accent font-bold">effortlessly</span>
          </h1>
          <p className="p-2 md:text-xl leading-relaxed text-center mt-8 ">
            Rediscover your misplaced items around the campus effortlessly,
            effortlessly reclaiming and reconnecting with those lost possessions
            that hold immense value and are essential in your daily life.
          </p>
          <div className="flex items-center justify-center mt-4">
            <Link href="/home">
              <button className="bg-accent py-2 px-4 rounded-lg text-xl hover:shadow-xl shadow-accent hover:scale-110 ease-in duration-150 text-white hover:bg-transparent hover:text-text border-[1px] border-accent">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Stats />
      <Testimonials />
      <Pricing />
    </>
  );
}
