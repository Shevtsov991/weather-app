import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IThemeProvider, Theme } from "../template/data";
import ChangeCssRootVariables from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

export const ThemeProvider = ({ children, ...props }: IThemeProvider) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("theme") || Theme.LIGHT
  );
  ChangeCssRootVariables(theme);
  const changeTheme = (theme: Theme) => {
    storage.setItem("theme", theme);
    setTheme(theme);
    ChangeCssRootVariables(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
