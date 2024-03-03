import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CityResponse, City, CityState } from 'types';
import { LoadingStates } from 'consts';

const ENDPOINT_CITIES = '/api/cities';

export const fetchCities = createAsyncThunk<City[]>(
  'data/fetchCities',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<CityResponse>(ENDPOINT_CITIES);
      return response.data.cities;
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

const initialState: CityState = {
  cities: [],
  status: LoadingStates.Idle,
  error: null,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = LoadingStates.Loading;
      })
      .addCase(fetchCities.fulfilled, (state, action: PayloadAction<City[]>) => {
        state.status = LoadingStates.Success;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action: PayloadAction<any>) => {
        state.status = LoadingStates.Fail;
        state.error = action.payload ? action.payload.error : 'Could not fetch data.';
      });
  },
});

export const cityReducer = citySlice.reducer;

export default citySlice;