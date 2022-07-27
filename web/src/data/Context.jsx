import { createContext } from 'react';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
