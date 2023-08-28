import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../redux/book/thunk/addbook";
import updateBook from "./../redux/book/thunk/updateBook";
import { updateBookData } from "./../redux/manage-update/action";
const AddBook = () => {
  const dispatch = useDispatch();
  const update = useSelector((state) => state.update);

  const { status, data } = update;
  const [bookInfo, setBookInfo] = useState(
    status ? { ...data } : { featured: false }
  );

  useEffect(() => {
    status && setBookInfo(update.data);
  }, [update, status]);

  const { name, author, thumbnail, price, rating, id } = bookInfo;

  const bookInfoHandler = (e) => {
    const updatedBookInfo = {
      ...bookInfo,
    };
    updatedBookInfo[e.target.name] =
      e.target.name === "featured" ? e.target.checked : e.target.value;
    setBookInfo(updatedBookInfo);
  };

  const handleBook = (e, type) => {
    e.preventDefault();
    if (type === "update") {
      dispatch(updateBook(id, bookInfo));
      dispatch(updateBookData(false, {}));
    } else {
      if (Object.keys(bookInfo).length === 6) {
        dispatch(addBook(bookInfo));
        setBookInfo({ featured: false });
      } else {
        alert("valo kore data puron kora lagbe re bapu");
      }
    }
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form
        className="book-form"
        onSubmit={(e) => handleBook(e, status ? "update" : "add")}
      >
        <div className="space-y-2">
          <label for="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={name}
            onChange={bookInfoHandler}
          />
        </div>

        <div className="space-y-2">
          <label for="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={author}
            onChange={bookInfoHandler}
          />
        </div>

        <div className="space-y-2">
          <label for="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={bookInfoHandler}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label for="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={price}
              onChange={bookInfoHandler}
            />
          </div>

          <div className="space-y-2">
            <label for="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={rating}
              onChange={bookInfoHandler}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            onChange={bookInfoHandler}
          />
          <label for="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {`${!status ? "Add Book" : "Update Book"}`}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
