import { WeatherService } from "../../services/WeatherService";
import { currentWetherSlice } from "../slices/currentWetherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWether =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWetherSlice.actions.fetchCurrentWether());
      const res = await WeatherService.getCurrentWwether(payload);
      if (res.status === 200) {
        dispatch(currentWetherSlice.actions.fetchCurrentWetherSuccess(res));
      } else {
        dispatch(currentWetherSlice.actions.fetchCurrentWetherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
