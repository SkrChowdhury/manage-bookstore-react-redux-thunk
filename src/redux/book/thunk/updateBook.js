import loadBooks from "./loadBooks";

const updateBook = (bookId, bookData) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify({ ...bookData }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch(loadBooks);
  };
};

export default updateBook;
