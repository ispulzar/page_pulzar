import { useEffect } from "react";
import useIntersection from "../hooks/useIntersection";

export const PageInfo = () => {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };

  const [Observador1IsVisible, Observador1Ref] = useIntersection(options);
  const [Ob1Sub1IsVisible, Ob1Sub1Ref] = useIntersection(options);
  const [Ob1Sub2IsVisible, Ob1Sub2Ref] = useIntersection(options);
  const [Ob1Sub3IsVisible, Ob1Sub3Ref] = useIntersection(options);
  const [Ob1Sub4IsVisible, Ob1Sub4Ref] = useIntersection(options);

  const [Observador2IsVisible, Observador2Ref] = useIntersection(options);
  const [Ob2Sub1IsVisible, Ob2Sub1Ref] = useIntersection(options);
  const [Ob2Sub2IsVisible, Ob2Sub2Ref] = useIntersection(options);
  const [Ob2Sub3IsVisible, Ob2Sub3Ref] = useIntersection(options);
  const [Ob2Sub4IsVisible, Ob2Sub4Ref] = useIntersection(options);

  useEffect(() => {
    console.log(Observador1IsVisible);
    console.log(Observador2IsVisible);
  }, [Observador1IsVisible, Observador2IsVisible]);

  return (
    <>
      <div className={`seccion-pageinfo animaciones-d texto-estatico sec-1`}>
        <div className="f-col">
          <p
            className={`titulo ${
              Observador1IsVisible ? "transition-style" : "transition-style-out"
            }`}
          >
            ¡Creamos tu landing page GRATIS!
          </p>
          <p
            className={`descripcion ${
              Observador1IsVisible ? "transition-style" : "transition-style-out"
            }`}
          >
            la haremos en tiempo record sin que pierda su calidad.
          </p>
        </div>
        <p
          className={`p-1 titulo-2 ${
            Ob1Sub1IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          Ofrece informacion de tu empresa
        </p>
        <p
          className={`p-1 titulo-2 ${
            Ob1Sub2IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          con un landing page que destaque
        </p>
        <img
          src="/landing_1.webp"
          alt="imagen landing page gratuita"
          className={`sombra center-center ${
            Ob1Sub2IsVisible ? "transition-style" : "transition-style-out"
          }`}
        />
        <p
          className={`p-1 titulo-2 ${
            Ob1Sub3IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          vuelve mas atractivo tu negocio
        </p>
        <img
          src="/landing_2.webp"
          alt="imagen landing page gratuita"
          className={`sombra ${
            Ob1Sub3IsVisible ? "transition-style" : "transition-style-out"
          }`}
        />
        <p
          className={`p-1 titulo-2 ${
            Ob1Sub4IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          Diseños personalizados
        </p>
      </div>
      <div ref={Observador1Ref} className="observador separador-ob-md "></div>
      <div ref={Ob1Sub1Ref} className="observador separador-ob-md "></div>
      <div ref={Ob1Sub2Ref} className="observador separador-ob-full "></div>
      <div ref={Ob1Sub3Ref} className="observador separador-ob-sm "></div>
      <div ref={Ob1Sub4Ref} className="observador separador-ob-md "></div>

      <div className={`seccion-pageinfo animaciones-d texto-estatico sec-2`}>
        <div>
          <p
            className={`titulo ${
              Observador2IsVisible ? "transition-style" : "transition-style-out"
            }`}
          >
            Visualiza a tus clientes
          </p>
          <p
            className={`descripcion ${
              Observador2IsVisible ? "transition-style" : "transition-style-out"
            }`}
          >
            Descubre cuántas personas visitan tu sitio web y conoce el impacto
            real de tu presencia online.
          </p>
        </div>
        <div className="c-vi-vie">
          <video
            className={`video-visitas ${
              Ob2Sub2IsVisible || Ob2Sub3IsVisible || Ob2Sub4IsVisible
                ? "transition-style "
                : "transition-style-out"
            }`}
            muted
            autoPlay
            loop
            controls={false}
          >
            <source src="visitas_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p
          className={`descripcion titulo-2 ${
            Ob2Sub1IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          Descubre cuántas personas visitan tu sitio web.
        </p>
        <p
          className={`descripcion titulo-2 ${
            Ob2Sub3IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          de que manera interactuan con ella.
        </p>
        <p
          className={`descripcion titulo-2 ${
            Ob2Sub4IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          y como se proyecta ante tus clientes.
        </p>
      </div>
      <div ref={Observador2Ref} className="observador separador-ob-md "></div>
      <div ref={Ob2Sub1Ref} className="observador separador-ob-sm "></div>
      <div ref={Ob2Sub2Ref} className="observador separador-ob-md "></div>
      <div ref={Ob2Sub3Ref} className="observador separador-ob-mdd "></div>
      <div ref={Ob2Sub4Ref} className="observador separador-ob-md "></div>

      <div
        className={`texto-estatico ${
          Observador1IsVisible
            ? "transition-scale-display transition-style"
            : "transition-scale"
        }`}
      >
        <p>
          puedes enviarlos al ws y cuando estes listo daremos el siguiente paso
        </p>
        <p>
          Vende tus productos online las 24 horas del día, los 7 días de la
          semana.
        </p>
        <p>
          Preparado para impulsar tu negocio? de Landing Page a Ecommerce con
          nosotros
        </p>
      </div>
    </>
  );
};
