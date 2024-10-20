import { Button } from "@nextui-org/react";

function ButtonUI({
  color = "primary",
  variant = "solid",
  loading = false,
  funcion = {},
}) {
  switch (loading) {
    case true:
      return (
        <Button color={color} isLoading onClick={funcion}>
          hola
        </Button>
      );
    default:
      return (
        <Button color={color} variant={variant} onClick={funcion}>
          hola
        </Button>
      );
  }
}

export default ButtonUI;
