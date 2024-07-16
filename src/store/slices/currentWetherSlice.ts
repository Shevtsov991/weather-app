import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IWeather } from "../../template/data";
import { AxiosResponse } from "axios";

const initialState: IInitialState = {
  weather: {
    main: { temp: 0, temp_max: 0, temp_min: 0 },
    name: "",
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
      action: PayloadAction<AxiosResponse<IWeather>>
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
      action: PayloadAction<AxiosResponse<IWeather>>
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
