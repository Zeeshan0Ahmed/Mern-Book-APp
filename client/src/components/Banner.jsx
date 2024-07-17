import React from "react";
import BannerCard from "../Pages/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y h-full ">
          <h2 className="text-3xl font-bold leading-snug text-black my-5">
            Read and Download your Books{" "}
            <span className="text-blue-700">to gain knowledge</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
            deserunt quam, itaque in, odit vitae obcaecati reiciendis architecto
            est dolor alias officiis autem. Ea dolore nobis dicta cumque
            accusamus!
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 my-6 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
