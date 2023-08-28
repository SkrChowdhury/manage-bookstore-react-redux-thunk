import { loadBook } from "../actions";

const filteredBook = (filterType) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:9000/books");
    const allBooks = await res.json();

    if (filterType === "All") {
      dispatch(loadBook(allBooks));
    } else {
      const filteredBook = allBooks.filter((book) => book.featured);
      dispatch(loadBook(filteredBook));
    }
  };
};

export default filteredBook;
