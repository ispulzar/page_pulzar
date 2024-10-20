import React from "react";

type Props = {
    title: string
};

function SpanMaquina({title}: Props) {
  return (
    <span id="kaizen" className="maquinaescribir">
      {title}
    </span>
  );
}

export default SpanMaquina;
