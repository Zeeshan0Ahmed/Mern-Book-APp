import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaReadme } from "react-icons/fa";
import "./BookCards.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      <div className="mt-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => {
            return (
              <SwiperSlide key={book._id}>
                <Link to={`/api/v1/books/${book._id}`}>
                  <div className="relative">
                    <img src={book.imageUrl} className="h-auto w-full" />
                    <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                      <FaReadme className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3>{book.bookTitle}</h3>
                      <p>{book.authorName}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
