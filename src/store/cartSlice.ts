import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cocktail } from 'types'

interface CartState {
  items: Cocktail[];
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cocktail>) => {
      state.items.push(action.payload);
      state.itemCount = state.items.length;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartSlice;
