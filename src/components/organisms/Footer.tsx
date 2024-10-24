import ContactUs from "./ContactUs";


function Footer() {
  return (
    <div className="footer">
      <div>
        <ContactUs />
      </div>
      <div className="contenedor-footer">
        <h3>Pulzar</h3>
        <div>
          <div>
            <a href="/">Acerca de nosotros</a>
          </div>
          <div>
            <a href="/">Servicios</a>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Pulzar. Todos los derechos
          reservados.
        </div>
      </div>
    </div>
  );
}

export default Footer;
