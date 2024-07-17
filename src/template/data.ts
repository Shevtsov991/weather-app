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
// export enum City {
//   SaintPetersburg = "Saint-Petersburg",
//   Moscow = "Moscow",
//   Kupino = "Kupino",
// }
export interface ICityProvider {
  children: ReactNode;
}
export interface ICityContext {
  city: string;
  changeCity: (city: string) => void;
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
  weather: ICurrentWeather;
  isLoading: boolean;
  responce: IResponce;
}

export interface IResponce {
  status: number;
  message: string;
}
export interface IDateInfo {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxwind_kph: number;
  };
}
export interface IWeatherForecast {
  forecast: {
    forecastday: Array<IDateInfo>;
  };
  location: {
    name: string;
    localtime: string;
  };
}
export interface ICondition {
  code: number;
  text: string;
  icon: string;
}

export interface ICurrentWeather {
  current: {
    cloud: number;
    condition: ICondition;
    pressure_mb: number;
    temp_c: number;
    feelslike_c: number;
    wind_dir: string;
    wind_kph: number;
    precip_mm: number;
    gust_kph: number;
  };
  location: {
    localtime: string;
    name: string;
  };
}
