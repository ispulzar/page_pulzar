import { createContext, useContext, useState } from "react";

interface GlobalState {
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

const GlobalContext = createContext<GlobalState>({
  pageIndex: 0,
  setPageIndex: () => {},
});

export function useGlobalState(): GlobalState {
  return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <GlobalContext.Provider value={{ pageIndex, setPageIndex }}>
      {children}
    </GlobalContext.Provider>
  );
}