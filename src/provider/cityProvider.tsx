import { useEffect, useState } from "react";
import { ICityProvider } from "../template/data";

import { storage } from "../model/Storage";
import { CityContext } from "../context/CityContext";

export const CityProvider = ({ children, ...props }: ICityProvider) => {
  const [city, setCity] = useState<string>("Saint-Petersburg");

  let Defaultcity = storage.getItem("City");
  useEffect(() => {
    setCity(Defaultcity);
  }, []);

  //setCity(storage.getItem("City"));
  const changeCity = (city: string) => {
    storage.setItem("City", city);
    setCity(city);
  };
  return (
    <CityContext.Provider value={{ city, changeCity }} {...props}>
      {children}
    </CityContext.Provider>
  );
};
