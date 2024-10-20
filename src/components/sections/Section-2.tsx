import useIntersection from "../hooks/useIntersection";
import BloqueH from "../molecules/BloqueH";

export const PageInfo = () => {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };
  const [P1IsVisible, P1Ref] = useIntersection(options);
  const [P2IsVisible, P2Ref] = useIntersection(options);
  const [P3IsVisible, P3Ref] = useIntersection(options);
  const [P4IsVisible, P4Ref] = useIntersection(options);

  return (
    <div className="pageinfo">
      <div className="contenedor-left" ref={P1Ref}>
        <p
          className={`titles-secondarys p1-position ${
            P1IsVisible ? "animation-height-display" : "animation-height"
          }`}
        >
          la haremos en tiempo record sin que pierda su calidad.
        </p>
        <BloqueH
          img="/PC_WEB_DESING_5.jpg"
          alt="imagen landing page gratuita"
          description="¿Quieres aumentar tus ventas sin invertir mucho? ¡Crea tu landing page GRATIS!"
        />
        <p
          className={`titles-secondarys p2-position ${
            P1IsVisible ? "animation-height-display" : "animation-height"
          }`}
        >
          preparado para hacer crecer tu negocio?
        </p>
      </div>
      <div className="contenedor-right" ref={P2Ref}>
        <BloqueH
          img="/PC_WEB_3.jpg"
          description="Descubre cuántas personas visitan tu sitio web y conoce el impacto real de tu presencia online."
          alt="prueba"
          textPosition="left"
        />
        <div>
          <p
            className={`titles-secondarys p3-position ${
              P2IsVisible ? "animation-height-display" : "animation-height"
            }`}
          >
            te ofreceremos estadisticas de tu pagina en tiempo real para que
            puedas ver el numero de visitantes.
          </p>
        </div>
        <button
          id="button-prueba"
          className={`titles-secondarys p4-position ${
            P2IsVisible ? "" : "animaitonOpa"
          }`}
        >
          ¡PRUEBALO GRATIS!
        </button>
      </div>
      <div className="contenedor-left" ref={P3Ref}>
        <BloqueH
          img="/PC_WEB_2.jpg"
          description="Convierte más visitantes en clientes con una landing page que destaque."
          alt="prueba"
        />
        <div className="block4-p1">
          <p
            className={`titles-secondarys p4-position ${
              P3IsVisible ? "animation-height-display" : "animation-height"
            }`}
          >
            no pierdas la posibilidad de perder clientes REDIRIGELOS este primer
            mes
          </p>
        </div>
        <div className="block4-p2">
          <p
            className={`titles-secondarys p5-position ${
              P3IsVisible ? "animation-height-display" : "animation-height"
            }`}
          >
            puedes enviarlos al ws y cuando estes listo daremos el siguiente
            paso
          </p>
        </div>
      </div>
      <div className="contenedor-right" ref={P4Ref}>
        <BloqueH
          img="/SECURITY_5.jpg"
          description="Vende tus productos online las 24 horas del día, los 7 días de la semana."
          alt="prueba"
          textPosition="left"
        />
        <p
          className={`titles-secondarys p6-position ${
            P4IsVisible ? "animation-height-display" : "animation-height"
          }`}
        >
          Preparado para impulsar tu negocio? de Landing Page a Ecommerce con
          nosotros
        </p>
      </div>
    </div>
  );
};
