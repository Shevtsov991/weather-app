import { createContext } from "react";
import { ItabsContext } from "../template/data";

export const TabsContext = createContext<ItabsContext>({
  tab: "",
  changeTabs: () => {},
});
