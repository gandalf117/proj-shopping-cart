import { configureStore, combineSlices } from '@reduxjs/toolkit';
import themeSlice, { themeReducer } from './themeSlice';
import cartSlice, { cartReducer } from './cartSlice';
import cocktailSlice, { cocktailReducer } from './cocktailSlice';
import countrySlice, { countryReducer } from './countrySlice';
import citySlice, { cityReducer } from './citySlice';

const rootReducer = combineSlices(themeSlice, cartSlice, cocktailSlice, countrySlice, citySlice, {
  theme: themeReducer,
  cart: cartReducer,
  cocktail: cocktailReducer,
  country: countryReducer,
  city: cityReducer,
})

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
