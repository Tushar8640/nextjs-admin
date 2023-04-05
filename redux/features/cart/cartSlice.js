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
       const newState = state.filter(s=>s.id!==action.payload)
    //   state.push(action.payload)
    },
  },
});

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;