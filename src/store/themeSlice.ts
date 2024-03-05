import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Theme } from '../assets/themes/theme.interface'
import lightTheme from '../assets/themes/lightTheme';
import darkTheme from '../assets/themes/darkTheme';

interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: lightTheme, // Default theme
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value.name === lightTheme.name ? darkTheme : lightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

// export const selectTheme = (state: RootState) => state.theme.value;

export const themeReducer = themeSlice.reducer;

export default themeSlice;