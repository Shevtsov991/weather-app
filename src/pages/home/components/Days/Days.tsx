import React, { useEffect, useState } from "react";
import s from "./Days.module.scss";
import { IDateInfo } from "../../../../template/data";
import { Card } from "./Card";
import { Tabs } from "./Tabs";
import { useCastomSelector } from "../../../../hooks/store";
import { currentWetherData } from "../../../../store/selectors";
import { useTabs } from "../../../../hooks/useTabs";

type Props = {};

export const Days = (props: Props) => {
  const { weather } = useCastomSelector(currentWetherData);
  const tab = useTabs();
  const days: IDateInfo[] = weather.forecast.forecastday;

  let daysNumbers: number = 7;
  switch (tab.tab) {
    case "На неделю":
      daysNumbers = 7;
      break;
    case "На 10 дней":
      daysNumbers = 10;
      break;
    case "На 14 дней":
      daysNumbers = 14;
      break;

    default:
      break;
  }

  return (
    <section className={s.days}>
      <Tabs />
      <div className={s.card__wrapper}>
        {days.slice(0, daysNumbers).map((el: IDateInfo) => (
          <Card el={el} key={el.date} />
        ))}
      </div>
    </section>
  );
};
