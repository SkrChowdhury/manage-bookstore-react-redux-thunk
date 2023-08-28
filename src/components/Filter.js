import React from "react";
import { useDispatch } from "react-redux";
import filteredBook from "./../redux/book/thunk/filteredook";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (filterType) => {
    dispatch(filteredBook(filterType));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className="filter-btn active-filter"
          id="lws-filterAll"
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        <button
          className="filter-btn"
          id="lws-filterFeatured"
          onClick={() => handleFilter("Featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Filter;
