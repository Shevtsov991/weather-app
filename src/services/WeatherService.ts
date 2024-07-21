import axios, { AxiosResponse } from "axios";
import { ICurrentWeather } from "../template/data";
import api from "../axios";

export class WeatherService {
  static getCurrentWwether(
    sity: string
  ): Promise<AxiosResponse<ICurrentWeather>> {
    return api.get<ICurrentWeather>(`/forecast.json?q=${sity}`);
  }
}
