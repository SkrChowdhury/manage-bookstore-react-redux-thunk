import loadBooks from "./loadBooks";

const addBook = (data) => {
  return async (dispatch) => {
    await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    dispatch(loadBooks);
  };
};

export default addBook;
