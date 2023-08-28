import { useState } from "react";
import image from "../images/logo.svg";
import { useDispatch } from "react-redux";
import { searchBook } from "../redux/book/actions";
import loadBooks from "./../redux/book/thunk/loadBooks";

const Navbar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    dispatch(searchBook(e.target.value.toUpperCase()));
  };

  if (input === "") {
    dispatch(loadBooks);
  }
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={image} width="150px" alt="" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">Book Store</li>
          <li className="cursor-pointer">Wishlist</li>
          <li className="cursor-pointer">My Collection</li>
        </ul>

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Filter books..."
              className="search"
              id="lws-searchBook"
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
