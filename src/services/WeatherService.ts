import axios, { AxiosResponse } from "axios";
import { IWeather } from "../template/data";
import api from "../axios";
// const ApiKey = "69d8d8d90382032b174c2358d9c03fe7";
// const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${ApiKey}`;
//const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${XApiKey}`;
export class WeatherService {
  static getCurrentWwether(sity: string): Promise<AxiosResponse<IWeather>> {
    return api.get<IWeather>(`/weather?q=${sity}`);
  }
}
