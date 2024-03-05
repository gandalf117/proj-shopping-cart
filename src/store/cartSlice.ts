import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { Cocktail, UserData } from 'types'

interface CartState {
  items: Cocktail[];
  itemCount: number;
  userData: UserData;
  promoCode: string;
  validCodes: string[];
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
  userData: {
    fname: '',
    lname: '',
    email: '',
    country: null,
    city: null,
    street: '',
    promoCode: '',
  },
  promoCode: '',
  validCodes: ['ABC123', 'QWE456', 'ASD777'],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cocktail>) => {
      const newItem = action.payload;
      const itemIndex = state.items.findIndex(i => i.id === newItem.id);

      if (itemIndex === -1) {
        state.items.push(newItem);
      } else {
        state.items[itemIndex].count++;
      }
      
      state.itemCount = state.items.reduce((result, item) => {
        return result += item.count;
      }, 0);
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export const { addToCart, setUserData } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartSlice;
