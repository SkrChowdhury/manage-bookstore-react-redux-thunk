import { LOAD_BOOK, SEARCH } from "./actionTypes";
import initialState from "./initialState";

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOK:
      return action.payload;

    case SEARCH:
      return state.filter(
        (book) => book.name.toUpperCase().indexOf(action.payload) > -1
      );

    default:
      return state;
  }
};

export default bookReducer;
