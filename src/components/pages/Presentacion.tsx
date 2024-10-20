import React from "react";
import useIntersection from "../hooks/useIntersection";
import SpanMaquina from "../atoms/SpanMaquina";

type Props = {
  src: string;
  children?: React.ReactNode;
};

export default function Presentacion({ children, src }: Props) {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };
  const [textRef1IsVisible, textRef1] = useIntersection(options);

  return (
    <div ref={textRef1}>
      <video
        className="video-bg video-presentacion"
        muted
        autoPlay
        loop
        controls={false}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container-maquinaescribir bebas-neue-regular">
        <SpanMaquina title="Mejora continua." />
      </div>
      <div
        className={`presentacion-text1 ${
          textRef1IsVisible ? "transition-height-display" : "transition-height"
        } `}
      >
        <p>
          Nos encargamos de crear un diseño unico para cada cliente que lo haga
          distinto al resto!
        </p>
      </div>
      <div
        className={`presentacion-text2 ${
          textRef1IsVisible ? "transition-height-display" : "transition-height"
        }`}
      >
        <p className={`  `}>
          Te invitamos a disfrutar de una landingPage totalmente gratis
        </p>
      </div>
      {children}
    </div>
  );
}
