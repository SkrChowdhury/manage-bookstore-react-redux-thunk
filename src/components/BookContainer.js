import React, { useEffect } from "react";
import Book from "./Book";
import { useSelector, useDispatch } from "react-redux";
import loadBooks from "./../redux/book/thunk/loadBooks";

const BookContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks);
  }, [dispatch]);

  return (
    <div className="lws-bookContainer">
      {books.map((book, i) => (
        <Book book={book} key={i} />
      ))}
    </div>
  );
};

export default BookContainer;
