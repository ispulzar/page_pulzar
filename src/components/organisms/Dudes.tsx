import React, { useState } from "react";

type Props = {};

function Dudes({}: Props) {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);

  return (
    <div className="">
      <div className="dudes">
        <p className="titulo-dudes">¿Por qué necesitas una página web?</p>
        <p className="sub-titulo-dudes" onClick={() => setShow1(!show1)}>
          Mayor visibilidad
        </p>
        <p className={`text-dudes ${show1 ? "out-wipe-up" : "in-wipe-down"}`}>
          Estarás presente en internet las 24 horas del día, los 7 días de la
          semana, llegando a un público mucho más amplio.
        </p>
        <hr className="linea-dudes" />
        <p className="sub-titulo-dudes" onClick={() => setShow2(!show2)}>
          Obtienes Credibilidad
        </p>
        <p className={`text-dudes ${show2 ? "out-wipe-up" : "in-wipe-down"}`}>
          Una página web bien diseñada te otorga un aspecto más serio y
          profesional.
        </p>
        <hr className="linea-dudes" />
        <p className="sub-titulo-dudes" onClick={() => setShow3(!show3)}>
          Ventas
        </p>
        <p className={`text-dudes ${show3 ? "out-wipe-up" : "in-wipe-down"}`}>
          Podrás vender tus productos o servicios directamente desde tu sitio
          web, sin intermediarios.
        </p>
        <hr className="linea-dudes" />
        <p className="sub-titulo-dudes" onClick={() => setShow4(!show4)}>
          Contacto
        </p>
        <div>
          <div
            className={`text-dudes ${show4 ? "out-wipe-up" : "in-wipe-down"}`}
          >
            <p>
              Facilitarás que tus clientes se pongan en contacto contigo de
              forma rápida y sencilla.
            </p>
          </div>
          <div className="linea-dudes" />
        </div>
      </div>
      <span>¿Qué esperas para dar el siguiente paso?</span>
    </div>
  );
}

export default Dudes;
