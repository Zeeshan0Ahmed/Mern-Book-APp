import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCards from "../components/BookCard/BookCards";
const FavoriteBook = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/books/");
      console.log(data.slice(0, 6));
      const { result } = data;
      setBooks(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavoriteBook;
