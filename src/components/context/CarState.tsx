import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useCarContext = () => {
  const context = useContext(Context);
  return context;
};

export function CarContextProvider({ children }) {
  const car = "car";
  const [toggleCar, setToggleCar] = useState(false);
  function changeToggleCar() {
    setToggleCar(!toggleCar);
    console.log(toggleCar)
  }
  return <Context.Provider value={{ car, changeToggleCar, toggleCar }}>{children}</Context.Provider>;
}
