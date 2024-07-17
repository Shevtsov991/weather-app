import React from "react";
import s from "./ThisDayInfo.module.scss";

import cloud from "../../../../assets/images/image 1.png";
import { ICurrentWeather, IitemsThisDayInfo } from "../../../../template/data";
import { ThisDayItem } from "./ThisDayItem";
interface props {
  weather: ICurrentWeather;
}
export const ThisDayInfo = ({ weather }: props) => {
  const pressure = Math.floor(weather.current.pressure_mb * 0.750063755419211);
  const windMS = Math.floor(weather.current.wind_kph * 0.277778);
  let windDir = "";
  switch (weather.current.wind_dir.toLowerCase()) {
    case "w":
      windDir = "Запад";
      break;
    case "n":
      windDir = "Север";
      break;
    case "s":
      windDir = "Юг";
      break;
    case "e":
      windDir = "Восток";
      break;
    case "sw":
      windDir = "Юго-запад";
      break;
    case "se":
      windDir = "Юго-восток";
      break;
    case "nw":
      windDir = "Северо-запад";
      break;
    case "ne":
      windDir = "Северо-восток";
      break;

    default:
      windDir = "Что-то не так!";
      break;
  }
  const items: Array<IitemsThisDayInfo> = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${weather.current.temp_c}° - ощущается как ${weather.current.feelslike_c}°`,
    },
    {
      icon_id: "press",
      name: "Давление",
      value: `${pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${windMS} м/с  ${windDir} - легкий ветер`,
    },
  ];
  return (
    <section className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((el: IitemsThisDayInfo) => (
          <ThisDayItem el={el} key={el.icon_id} />
        ))}
      </div>
      <img src={cloud} alt="Облако" className={s.this__day_info_cloud} />
    </section>
  );
};
