import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers.js";

const store = configureStore({
  reducer: { data: rootReducer },
});
export default store