import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlide";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
