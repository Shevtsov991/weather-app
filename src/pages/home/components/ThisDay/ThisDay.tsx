import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { ICurrentWeather } from "../../../../template/data";

type Props = {
  weather: ICurrentWeather;
};

export const ThisDay = ({ weather }: Props) => {
  return (
    <section className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>
            {Math.floor(weather.current.temp_c)}°
          </div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{weather.location.localtime.slice(10)}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather.location.name}</span>
        </div>
      </div>
    </section>
  );
};
