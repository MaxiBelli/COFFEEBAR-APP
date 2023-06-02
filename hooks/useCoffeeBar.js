import { useContext } from "react";
import CoffeeBarContext from "../context/CoffeeBarProvider";

const useCoffeeBar = () => {
  return useContext(CoffeeBarContext);
};

export default useCoffeeBar;
