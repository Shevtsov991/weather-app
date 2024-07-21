import axios, { AxiosResponse } from "axios";
import { IWeatherForecast } from "../template/data";
import api from "../axios";

export class ForecastWeatherServices {
  static getCurrentWwether(
    sity: string
  ): Promise<AxiosResponse<IWeatherForecast>> {
    return api.get<IWeatherForecast>(`/forecast.json&days=10?q=${sity}`);
  }
}
