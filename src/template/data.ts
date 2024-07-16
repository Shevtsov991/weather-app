import { ReactNode } from "react";

export interface IitemsThisDayInfo {
  icon_id: string;
  name: string;
  value: string;
}

export interface IDaysInfo {
  day: string;
  day_info: string;
  icon_id: string;
  tem_day: string;
  temp_night: string;
  info: string;
}

export interface tabVal {
  tab: string;
}
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
export interface IThemeContext {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export interface IThemeProvider {
  children: ReactNode;
}

export interface IInitialState {
  weather: IWeather;
  isLoading: boolean;
  responce: IResponce;
}

export interface IResponce {
  status: number;
  message: string;
}
export interface IWeather {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
}
