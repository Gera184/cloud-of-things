import { configureStore } from "@reduxjs/toolkit";
import beerReducer from "./reducers/beerReducer";

const store = configureStore({
  reducer: {
    beers: beerReducer,
  },
});

export default store;
