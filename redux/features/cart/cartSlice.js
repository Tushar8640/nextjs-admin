import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action) => {
       state.splice(action.payload,1)
    //   state.push(action.payload)
    },
  },
});

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;