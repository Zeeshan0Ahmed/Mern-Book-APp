import React from "react";
import favBookImg from "../assets/favoritebook.jpg";
const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20">
      <div className="md:w-1/2 ">
        <img src={favBookImg} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          exercitationem nam ex suscipit facilis nihil tenetur natus qui quas
          enim sint nulla, totam unde quidem ducimus dignissimos, officiis sunt
          pariatur perspiciatis voluptatum iste, ipsum blanditiis libero saepe!
          Quisquam, ipsum. Aspernatur.
        </p>
        <div className="flex ">
            <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-base">Book Listing</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">200+</h3>
                <p className="text-base">Register Users</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">1200+</h3>
                <p className="text-base">PDF Downloads</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
