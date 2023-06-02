import { useState, useEffect, createContext } from "react";

const CoffeeBarContext = createContext();

const CoffeeBarProvider = ({ children }) => {
  return (
    <CoffeeBarContext.Provider value={{}}>{children}</CoffeeBarContext.Provider>
  );
};

export { CoffeeBarProvider };
export default CoffeeBarContext;
