import React from "react";
import s from "./Days.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { tabVal } from "../../../../template/data";

type Props = {};

export const Tabs = (props: Props) => {
  const tabs: tabVal[] = [
    {
      tab: "На неделю",
    },
    {
      tab: "На месяц",
    },
    {
      tab: "На 10 дней",
    },
  ];
  return (
    <section className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((el, index) => (
          <div className={s.tab} key={index}>
            {el.tab}
          </div>
        ))}
      </div>
      <div className={s.tabs__cancel}>Отменить</div>
    </section>
  );
};
