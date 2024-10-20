import React from "react";
import CardClient from "../molecules/CardClient";

type Props = {
  src: string;
  children?: React.ReactNode;
  isEstatico: boolean;
};

export default function PageVideo2({ children, src, isEstatico }: Props) {
  const containerClass = `contenedor-vd-2 ${
    isEstatico ? "estatico" : "relative"
  }`;
  console.log(containerClass);
  return (
    <div className={containerClass}>
      <video className="video-bg" muted autoPlay loop controls={false}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-client">Quieres ser uno de nuestros clientes?</div>
      <CardClient img="/CLIENTE_ICON.png"></CardClient>

      {children}
    </div>
  );
}
