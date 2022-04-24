import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 44.09,
    kiloValue: 20,
  },
  reducers: {
    //increases total LB weight on bar based on which button pushed in
    //plateAdder.js
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    //decerements total LBS based on button in plateAdder.js
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },

    //resets the weight on the bar to only the weight on the bar
    resetValue: (state) => {
      state.value = 44.09;
    },

    //increasese the current KILO weight based on which button is pushed
    incrementKiloByAmount: (state, action) => {
      state.kiloValue += action.payload;
    },

    //decreases the curent KILO weight based on button pushed
    decrementKiloByAmount: (state, action) => {
      state.kiloValue -= action.payload;
    },

    // resets kilo amount to base bar weight in Kilos
    resetKiloValue: (state) => {
      state.kiloValue = 20;
    },
  },
});

export const {
  incrementByAmount,
  decrementByAmount,
  resetValue,
  incrementKiloByAmount,
  resetKiloValue,
  decrementKiloByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
