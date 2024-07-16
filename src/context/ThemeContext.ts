import { createContext } from "react";
import { IThemeContext, Theme } from "../template/data";

export const ThemeContext = createContext<IThemeContext>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});
