import React from "react";
import Banner from "../components/Banner";
import FavoriteBook from "./FavoriteBook";
import FavBook from "./FavBook";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoriteBook />
      <FavBook />
    </div>
  );
};

export default Home;
