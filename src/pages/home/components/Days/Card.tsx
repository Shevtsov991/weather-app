import React from "react";
import s from "./Days.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { IDaysInfo } from "../../../../template/data";
import { CardSvgSelector } from "../../../../assets/icons/card/cardSvgSelector";

type Props = {
  el: IDaysInfo;
};

export const Card = ({ el }: Props) => {
  return (
    <div className={s.card}>
      <span className={s.this__day}>{el.day}</span>
      <span className={s.this__day_name}>{el.day_info}</span>
      <div className={s.img}>
        <CardSvgSelector id={el.icon_id} />
      </div>
      <span className={s.this__day_maxTemp}>{el.tem_day}</span>
      <span className={s.this__day_minTemp}>{el.temp_night}</span>
      <span className={s.this__day_info}>{el.info}</span>
    </div>
  );
};
