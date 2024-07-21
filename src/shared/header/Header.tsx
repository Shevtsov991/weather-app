import React from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/globalSvgSelector";
import Select, { StylesConfig } from "react-select";
import { useTheme } from "../../hooks/useTheme";

import { Theme } from "../../template/data";
import { useCity } from "../../hooks/useCity";
import { storage } from "../../model/Storage";

type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();
  const city = useCity();

  const colorStyles: StylesConfig = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor:
        theme.theme === "light"
          ? "rgba(71, 147, 255, 0.2)"
          : "rgba(79, 79, 79, 1)",
      width: "194px",
      height: "37px",
      border: "nonne",
      borderRadius: "10px",
      zIndex: "100",
    }),
    singleValue: (styles, state) => ({
      ...styles,
      color:
        theme.theme === "light" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
    }),
    menu: (styles, state) => ({
      ...styles,
      background:
        theme.theme === "light"
          ? "rgba(71, 147, 255, 0.2)"
          : "rgba(79, 79, 79, 1)",
      color:
        theme.theme === "light" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
    }),
  };
  const options = [
    { value: "Saint-Petersburg", label: "Санкт-петербург", id: 0 },
    { value: "Moscow", label: "Москва", id: 1 },
    { value: "Kupino", label: "Купино", id: 2 },
  ];

  const changeThem = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const changeCity = (event: any) => {
    city.changeCity(event.value);
  };
  const cityName: string = storage.getItem("City");
  const activeEl = options.find((el) => el.value === cityName);
  let id: number = 0;
  if (activeEl != undefined) {
    id = activeEl.id;
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_them} onClick={() => changeThem()}>
          <GlobalSvgSelector id="change-them" />
        </div>
        <Select
          defaultValue={options[id]}
          options={options}
          styles={colorStyles}
          onChange={(event) => changeCity(event)}
        />
      </div>
    </header>
  );
};
