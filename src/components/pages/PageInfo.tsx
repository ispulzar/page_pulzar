import { useEffect } from "react";
import useIntersection from "../hooks/useIntersection";
import { div } from "framer-motion/client";

export const PageInfo = () => {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };
  const [Observador1IsVisible, Observador1Ref] = useIntersection(options);
  const [Ob1Sub1IsVisible, Ob1Sub1Ref] = useIntersection(options);
  const [Ob1Sub2IsVisible, Ob1Sub2Ref] = useIntersection(options);
  const [Ob1Sub3IsVisible, Ob1Sub3Ref] = useIntersection(options);
  const [Observador2IsVisible, Observador2Ref] = useIntersection(options);
  const [Observador3IsVisible, Observador3Ref] = useIntersection(options);
  const [Observador4IsVisible, Observador4Ref] = useIntersection(options);

  useEffect(() => {
    console.log(Observador1IsVisible);
    console.log(Observador2IsVisible);
  }, [Observador1IsVisible, Observador2IsVisible]);

  return (
    <>
      <div className={`seccion-pageinfo animaciones-d texto-estatico sec-1`}>
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
        <p
          className={`p-1 titulo-2 ${
            Ob1Sub1IsVisible ? "transition-style" : "transition-style-out"
          }`}
        >
          Ofrece informacion de tu empresa
        </p>
        <img
          src="/landing_1.webp"
          alt="imagen landing page gratuita"
          className={`sombra center-center ${
            Ob1Sub2IsVisible ? "transition-style" : "transition-style-out"
          }`}
        />
        <img
          src="/landing_1.webp"
          alt="imagen landing page gratuita"
          className={`sombra ${
            Ob1Sub3IsVisible
              ? "transition-scale-display transition-style"
              : "transition-scale"
          }`}
        />
      </div>
      <div ref={Observador1Ref} className="observador separador-ob-md "></div>
      <div ref={Ob1Sub1Ref} className="observador separador-ob-sm "></div>
      <div ref={Ob1Sub2Ref} className="observador separador-ob-md "></div>
      <div ref={Ob1Sub3Ref} className="observador separador-ob-md "></div>

      <div className="seccion-pageinfo animaciones-d texto-estatico ">
        {/* <img
          src="/landing_1.webp"
          alt="imagen landing page gratuita"
          className={`${
            Observador3IsVisible
              ? "transition-scale-display transition-style"
              : "transition-scale"
          }`}
        /> */}
      </div>
      <div ref={Observador3Ref} className="observador"></div>

      <div className={`seccion-pageinfo animaciones-d texto-estatico`}>
        <p
          className={`titulo ${
            Observador3IsVisible
              ? "transition-scale-display transition-style"
              : "transition-scale"
          }`}
        >
          Visualiza a tus clientes
        </p>
        <p
          className={`descripcion ${
            Observador3IsVisible
              ? "transition-scale-display transition-style"
              : "transition-scale"
          }`}
        >
          Descubre cuántas personas visitan tu sitio web y conoce el impacto
          real de tu presencia online.
        </p>
      </div>
      <div ref={Observador3Ref} className="w-full h-14 bg-red-500"></div>

      <div
        className={`texto-estatico ${
          Observador4IsVisible
            ? "transition-scale-display transition-style"
            : "transition-scale"
        }`}
      >
        <p className="titulo">Interactua con ellos!</p>
        <p className="descripcion">
          Realiza encuestas, preguntas o directamente monitorea donde hacen
          click!
        </p>
      </div>
      {/* <img
        ref={Observador3Ref}
        src="/PC_WEB_2.jpg"
        alt="imagen landing page"
        className={`${
          Observador3IsVisible ? "transition-scale-display" : "transition-scale"
        }`}
      /> */}
      <div
        className={`texto-estatico ${
          Observador4IsVisible
            ? "transition-scale-display transition-style"
            : "transition-scale"
        }`}
      >
        <button id="button-prueba">¡PRUEBALO GRATIS!</button>
        <p className="titulo">Convierte visitantes en clientes.</p>
        <p className="descripcion">
          Redirecionemos a tus clientes a tus redes sociales principales
        </p>
      </div>
      {/* <img
        ref={Image4Ref}
        src="/SECURITY_5.jpg"
        alt="imagen productos online"
        className={`${
          Observador4IsVisible ? "transition-scale-display" : "transition-scale"
        }`}
      /> */}
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
