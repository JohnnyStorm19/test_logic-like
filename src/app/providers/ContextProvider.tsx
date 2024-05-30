import { createContext } from "react";
import { IContext } from "./model/IContext";

interface AppContextProviderProps {
    children: React.ReactNode;
    values: IContext;
}

export const Context = createContext<IContext | null>(null);

export const ContextProvider = ({children, values}: AppContextProviderProps) => {
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
};


