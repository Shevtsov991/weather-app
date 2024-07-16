import { RootState } from "./store";

export const currentWetherData = (state: RootState) =>
  state.currentWetherSliceReducer;
