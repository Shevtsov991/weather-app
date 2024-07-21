import React from "react";
import s from "./Days.module.scss";
import { ItabsContext, tabVal } from "../../../../template/data";
import { useTabs } from "../../../../hooks/useTabs";

type Props = {};

export const Tabs = (props: Props) => {
  const tab = useTabs();
  const tabs: tabVal[] = [
    {
      tab: "На неделю",
    },
    {
      tab: "На 10 дней",
    },
    {
      tab: "На 14 дней",
    },
  ];
  const changeTabs = (event: React.MouseEvent<HTMLDivElement>) => {
    const id: string = event.currentTarget.id;
    tab.changeTabs(id);
  };
  const cancel = () => {
    tab.changeTabs("На неделю");
  };
  return (
    <section className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((el, index) => (
          <div id={el.tab} className={s.tab} key={index} onClick={changeTabs}>
            {el.tab}
          </div>
        ))}
      </div>
      <div className={s.tabs__cancel} onClick={cancel}>
        Отменить
      </div>
    </section>
  );
};
