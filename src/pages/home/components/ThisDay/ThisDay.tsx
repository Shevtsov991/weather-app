import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/globalSvgSelector";
import { IWeather } from "../../../../template/data";

type Props = {
  weather: IWeather;
};

export const ThisDay = ({ weather }: Props) => {
  return (
    <section className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          Город: <span>Санкт-Петербург</span>
        </div>
      </div>
    </section>
  );
};
