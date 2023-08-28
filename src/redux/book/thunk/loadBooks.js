import { loadBook } from "../actions";

const loadBooks = async (dispatch) => {
  const res = await fetch("http://localhost:9000/books");
  const books = await res.json();
  dispatch(loadBook(books));
};

export default loadBooks;
