import { useEffect, useState } from "react";
import { ItabsProvider } from "../template/data";

import { TabsContext } from "../context/TabsContext";

export const TabsProvider = ({ children, ...props }: ItabsProvider) => {
  const [tab, setTab] = useState<string>("На неделю");
  const changeTabs = (tab: string) => {
    setTab(tab);
  };
  return (
    <TabsContext.Provider value={{ tab, changeTabs }} {...props}>
      {children}
    </TabsContext.Provider>
  );
};
