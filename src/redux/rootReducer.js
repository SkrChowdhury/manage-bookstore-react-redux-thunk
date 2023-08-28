import bookReducer from "./book/bookReducer";
import { combineReducers } from "redux";
import updateBookReducer from "./manage-update/reducer";

const rootReducer = combineReducers({
  books: bookReducer,
  update: updateBookReducer,
});

export default rootReducer;
