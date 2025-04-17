import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
          remove: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload);
            if (existingItem) {
              if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
              } else {
                return state.filter((item) => item.id !== action.payload);
              }
            }
            return state;
          }
          
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;