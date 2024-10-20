import { Button } from "@nextui-org/react";
import { useCarContext } from "../context/CarState";
function ButtonCarUI() {
  const { car, changeToggleCar } = useCarContext();

  return <Button onPress={() => changeToggleCar()}>{car}</Button>;
}

export default ButtonCarUI;
