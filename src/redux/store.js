import { configureStore } from "@reduxjs/toolkit";
import threadSlice from "./threadSlice";

const store = configureStore({
  reducer: {
    threads: threadSlice,
  },
});

export default store;
