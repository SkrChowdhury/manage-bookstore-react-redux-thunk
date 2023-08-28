import loadBooks from "./loadBooks";

const deleteBook = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });
    dispatch(loadBooks);
  };
};

export default deleteBook;
