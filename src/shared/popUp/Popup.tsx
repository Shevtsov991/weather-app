import React from "react";
import s from "./popup.module.scss";
import cloud from "../../assets/images/image 1.png";
import { IitemsThisDayInfo } from "../../../src/template/data";
import { ThisDayItem } from "../../pages/home/components/ThisDayInfo/ThisDayItem";
import { GlobalSvgSelector } from "../../assets/icons/global/globalSvgSelector";

export const Popup = () => {
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
    <>
      <div className={s.blur}></div>
      <section className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Сегодня</div>
          <div className={s.day__img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время:<span> 20:45</span>
          </div>
          <div className={s.day__city}>
            Город:<span> Санкт-Петербург </span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((el: IitemsThisDayInfo) => (
            <ThisDayItem el={el} key={el.icon_id} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </section>
    </>
  );
};
