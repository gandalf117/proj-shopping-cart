import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CountryResponse, Country, CountryState } from 'types';
import { LoadingStates } from 'consts';

const ENDPOINT_COUNTRIES = '/api/countries';

export const fetchCountries = createAsyncThunk<Country[]>(
  'data/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<CountryResponse>(ENDPOINT_COUNTRIES);
      return response.data.countries;
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

const initialState: CountryState = {
  countries: [],
  status: LoadingStates.Idle,
  error: null,
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = LoadingStates.Loading;
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.status = LoadingStates.Success;
        console.log('countries action.payload:::', action.payload)
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action: PayloadAction<any>) => {
        state.status = LoadingStates.Fail;
        state.error = action.payload ? action.payload.error : 'Could not fetch data.';
      });
  },
});

export const countryReducer = countrySlice.reducer;

export default countrySlice;