import { createSlice } from "@reduxjs/toolkit";

const initStoreValue = { plate: "", weight: 0, size: "" };
export const plateSlice = createSlice({
  name: "plateSlice",
  initialState: {
    value: [initStoreValue],
  },
  reducers: {
    //add plate function adds a plate according to which button is pushed in plateAdder.js
    addPlate: (state, action) => {
      state.value.push(action.payload);
    },

    // ** removes most recent plate that was added to the plate stack
    removePlate: (state) => {
      if (state.value.length >= 0) {
        state.value.pop();
      } else {
      }
    },

    //completely resets the bar to an the intitial value
    resetPlate: (state) => {
      state.value = [initStoreValue];
    },
  },
});

export const { addPlate, removePlate, resetPlate } = plateSlice.actions;

export default plateSlice.reducer;
