import { createSlice } from "@reduxjs/toolkit";

const beersSlice = createSlice({
  name: "beers",
  initialState: {
    beers: [],
    selectedBeer: {},
  },
  reducers: {
    fetchAllBeers(state, action) {
      state.beers = action.payload;
    },
    fetchAllBeersByCategory(state, action) {
      state.beers = action.payload;
    },
    selectedBeer(state, action) {
      state.selectedBeer = action.payload;
    },
  },
});

export const beersActions = beersSlice.actions;

export default beersSlice.reducer;
