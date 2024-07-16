import React from "react";
import s from "./Days.module.scss";
import { IDaysInfo } from "../../../../template/data";
import { Card } from "./Card";
import { Tabs } from "./Tabs";

type Props = {};

export const Days = (props: Props) => {
  const days: IDaysInfo[] = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "cloudy",
      tem_day: "+18",
      temp_night: "+15",
      info: "cloudy",
    },
    {
      day: "Сегодня",
      day_info: "29 авг",
      icon_id: "rain",
      tem_day: "+18",
      temp_night: "+15",
      info: "rain",
    },
    {
      day: "Сегодня",
      day_info: "30 авг",
      icon_id: "light rain and sunshine",
      tem_day: "+18",
      temp_night: "+15",
      info: "light",
    },
    {
      day: "Сегодня",
      day_info: "31 авг",
      icon_id: "light rain",
      tem_day: "+18",
      temp_night: "+15",
      info: "light rain",
    },
    {
      day: "Сегодня",
      day_info: "32 авг",
      icon_id: "clear",
      tem_day: "+18",
      temp_night: "+15",
      info: "Небольшой дождь и солнце",
    },
    {
      day: "Сегодня",
      day_info: "33 авг",
      icon_id: "cloudy",
      tem_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сегодня",
      day_info: "34 авг",
      icon_id: "cloudy",
      tem_day: "+18",
      temp_night: "+15",
      info: "cloudy",
    },
  ];
  return (
    <section className={s.days}>
      <Tabs />
      <div className={s.card__wrapper}>
        {days.map((el: IDaysInfo) => (
          <Card el={el} key={el.day_info} />
        ))}
      </div>
    </section>
  );
};
