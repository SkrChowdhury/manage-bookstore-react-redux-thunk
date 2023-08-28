import React from "react";
import AddBook from "./AddBook";
import BookContainer from "./BookContainer";
import Filter from "./Filter";

const Main = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <Filter />
          <BookContainer />
        </div>
        <AddBook />
      </div>
    </main>
  );
};

export default Main;
