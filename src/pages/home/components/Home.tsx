import React, { useEffect } from "react";
import s from "./Home.module.scss";
import { ThisDay } from "./ThisDay/ThisDay";
import { ThisDayInfo } from "./ThisDayInfo/ThisDayInfo";
import { Days } from "./Days/Days";
import { useCastomDispatch, useCastomSelector } from "../../../hooks/store";
import { fetchCurrentWether } from "../../../store/thunks/fetchCurrentWeather";
import { currentWetherData } from "../../../store/selectors";
import { ICurrentWeather } from "../../../template/data";
import { useCity } from "../../../hooks/useCity";
type Props = {};

export const Home = (props: Props) => {
  const dispatch = useCastomDispatch();
  const city = useCity();
  const { weather, isLoading, responce } = useCastomSelector(currentWetherData);

  useEffect(() => {
    dispatch(fetchCurrentWether(city.city));
  }, []);

  useEffect(() => {
    dispatch(fetchCurrentWether(city.city));
  }, [city]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days />
    </div>
  );
};
