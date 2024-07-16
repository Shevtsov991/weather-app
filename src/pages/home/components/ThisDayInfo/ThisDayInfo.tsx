import React from "react";
import s from "./ThisDayInfo.module.scss";

import cloud from "../../../../assets/images/image 1.png";
import { IitemsThisDayInfo } from "../../../../template/data";
import { ThisDayItem } from "./ThisDayItem";

export const ThisDayInfo = () => {
  const items: Array<IitemsThisDayInfo> = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "press",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
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
