import React from "react";
import s from "./Days.module.scss";
import { IDateInfo } from "../../../../template/data";
import { CardSvgSelector } from "../../../../assets/icons/card/cardSvgSelector";

type Props = {
  el: IDateInfo;
};

export const Card = ({ el }: Props) => {
  const presentDay = new Date().getDate();
  const dayOfTheWeek = new Date(el.date).getDay();
  let nameDayOfTheWeek = "";

  switch (dayOfTheWeek) {
    case 0:
      nameDayOfTheWeek = "Воскресенье";
      break;
    case 1:
      nameDayOfTheWeek = "Понедельник";
      break;
    case 2:
      nameDayOfTheWeek = "Вторник";
      break;
    case 3:
      nameDayOfTheWeek = "Среда";
      break;
    case 4:
      nameDayOfTheWeek = "Четверг";
      break;
    case 5:
      nameDayOfTheWeek = "Пятница";
      break;
    case 6:
      nameDayOfTheWeek = "Суббота";
      break;

    default:
      nameDayOfTheWeek = "Какая-то ошибка!";
      break;
  }
  const dayApi = +el.date.slice(el.date.length - 2);

  return (
    <div className={s.card}>
      <span className={s.this__day}>{nameDayOfTheWeek}</span>
      <span className={s.this__day_name}>
        {el.date.slice(el.date.length - 5)}
      </span>
      <div className={s.img}>
        <img src={el.day.condition.icon} alt={el.day.condition.text} />
      </div>
      <span className={s.this__day_maxTemp}>
        {Math.floor(el.day.maxtemp_c)}
      </span>
      <span className={s.this__day_minTemp}>
        {Math.floor(el.day.mintemp_c)}
      </span>
      <span className={s.this__day_info}>{el.day.condition.text}</span>
    </div>
  );
};
