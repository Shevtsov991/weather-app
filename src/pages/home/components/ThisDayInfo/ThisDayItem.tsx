import React from "react";
import s from "./ThisDayInfo.module.scss";
import { IitemsThisDayInfo } from "../../../../template/data";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";
interface props {
  el: IitemsThisDayInfo;
}
export const ThisDayItem = ({ el }: props) => {
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={el.icon_id} />
      </div>
      <span className={s.indicator__name}> {el.name} </span>
      <span className={s.indicator__value}>{el.value}</span>
    </div>
  );
};
