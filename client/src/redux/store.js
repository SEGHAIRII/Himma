import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers.js";

const store = configureStore({
  reducer: { data: rootReducer },
});
export default store