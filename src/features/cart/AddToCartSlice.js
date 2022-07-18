import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

const addtocartSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // This can be done because immer makes it immutable under the hood
      state.value++;
    },
    // decrement
    // reset
  },
});

export const { incremented } = addtocartSlice.actions;

export default addtocartSlice.reducer;
