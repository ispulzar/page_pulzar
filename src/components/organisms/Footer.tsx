import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="footer ">
      <div className="contenedor">
        <div className="row">
          <div className="col">
            <h3>Compañía</h3>
            <ul>
              <li>
                <a href="/">Acerca de nosotros</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li>
                <a href="/">Productos</a>
              </li>
              <li>
                <a href="/">Servicios</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Tu Compañía. Todos los derechos
          reservados.
        </div>
      </div>
    </div>
  );
}

export default Footer;
