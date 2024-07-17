import { createContext } from "react";
import { ICityContext } from "../template/data";

export const CityContext = createContext<ICityContext>({
  city: "",
  changeCity: () => {},
});
