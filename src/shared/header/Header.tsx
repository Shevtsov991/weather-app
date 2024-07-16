import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/globalSvgSelector";
import Select, { StylesConfig } from "react-select";
import { useTheme } from "../../hooks/useTheme";
import ChangeCssRootVariables from "../../model/ChangeCssRootVariables";
import { Theme } from "../../template/data";

type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();
  // const [theme, SetThem] = useState("light");

  const options = [
    { value: "city_1", label: "Санкт-петербург" },
    { value: "city_2", label: "Москва" },
    { value: "city_3", label: "Купино" },
  ];
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
  const changeThem = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

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
          defaultValue={options[2]}
          options={options}
          styles={colorStyles}
        />
      </div>
    </header>
  );
};
