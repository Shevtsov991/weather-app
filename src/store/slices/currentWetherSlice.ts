import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICurrentWeather,
  IInitialState,
  IWeatherForecast,
} from "../../template/data";
import { AxiosResponse } from "axios";

const initialState: IInitialState = {
  weather: {
    current: {
      cloud: 0,
      condition: {
        code: 0,
        text: "",
        icon: "",
      },
      pressure_mb: 0,
      temp_c: 0,
      feelslike_c: 0,
      wind_dir: "",
      wind_kph: 0,
      precip_mm: 0,
      gust_kph: 0,
    },
    location: {
      localtime: "",
      name: "",
    },
  },
  isLoading: false,
  responce: {
    status: 0,
    message: "",
  },
};

export const currentWetherSlice = createSlice({
  name: "Current_weather",
  initialState,
  reducers: {
    fetchCurrentWether(state) {
      state.isLoading = true;
    },
    fetchCurrentWetherSuccess(
      state,
      action: PayloadAction<AxiosResponse<ICurrentWeather>>
    ) {
      state.weather = action.payload.data;
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWetherError(
      state,
      action: PayloadAction<AxiosResponse<ICurrentWeather>>
    ) {
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default currentWetherSlice.reducer;
