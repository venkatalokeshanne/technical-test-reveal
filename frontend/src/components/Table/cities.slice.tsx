import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchCitiesByCountry } from "../services";

interface city {
  country: string;
  geonameid: number;
  name: string;
  subcountry: string;
}

export interface CitiesState {
  city: [city] | null;
  status: "idle" | "loading" | "failed";
}

export const citiesData = createAsyncThunk(
  "cities/fetchCity",
  async (country: string) => {
    const response = await fetchCitiesByCountry(country);
    return response.data;
  }
);

const initialState: CitiesState = {
  city: null,
  status: "idle",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(citiesData.pending, (state) => {
        state.status = "loading";
        state.city = null
      })
      .addCase(citiesData.fulfilled, (state, action) => {
        state.status = "idle"
        state.city = action.payload;
      });
  },
});

//Selectors
export const selectCities = (state: RootState) => state.city;

export default citySlice.reducer;
