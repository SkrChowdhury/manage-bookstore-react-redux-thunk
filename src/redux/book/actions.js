import { LOAD_BOOK, SEARCH } from "./actionTypes";

export const loadBook = (data) => {
  return {
    type: LOAD_BOOK,
    payload: data,
  };
};

export const searchBook = (name) => {
  return {
    type: SEARCH,
    payload: name,
  };
};
