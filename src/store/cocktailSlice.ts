import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CocktailsResponse, Cocktail, CocktailsState } from 'types';
import { LoadingStates } from 'consts';

const ENDPOINT_COCKTAILS = '/api/cocktails';

export const fetchCocktails = createAsyncThunk<Cocktail[]>(
  'data/fetchCocktails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<CocktailsResponse>(ENDPOINT_COCKTAILS);
      return response.data.cocktails;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            // Check if the error has a response with a data object that contains a message
            if (error.response && error.response.data) {
                return rejectWithValue({ message: error.response.data.message });
            }
        }
        return rejectWithValue({ message: 'Network error' });
    }
  }
);

const initialState: CocktailsState = {
  cocktails: [],
  status: LoadingStates.Idle,
  error: null,
};

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.status = LoadingStates.Loading;
      })
      .addCase(fetchCocktails.fulfilled, (state, action: PayloadAction<Cocktail[]>) => {
        state.status = LoadingStates.Success;
        state.cocktails = action.payload;
      })
      .addCase(fetchCocktails.rejected, (state, action: PayloadAction<any>) => {
        state.status = LoadingStates.Fail;
        state.error = action.payload ? action.payload.error : 'Could not fetch data.';
      });
  },
});

export const cocktailReducer = cocktailSlice.reducer;

export default cocktailSlice;