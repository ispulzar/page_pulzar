import "./App.css";
import Presentacion from "./components/pages/Presentacion";
import NavbarUI from "./components/molecules/NavbarUI";
import { PageInfo } from "./components/pages/PageInfo";
import Footer from "./components/organisms/Footer";
import PageVideo2 from "./components/pages/PageVideo2";
import useIntersection from "./components/hooks/useIntersection";

function App() {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };

  const [Observador1IsVisible, Observador1Ref] = useIntersection(options);

  return (
    <div id="app">
      {/* <div className="fixed top-0 left-0 z-10 w-full">
        <NavbarUI brand={"Pulzar"} menuItems={["Contacto", "Nosotros"]} />
      </div> */}
      <div className="presentacion">
        <Presentacion src="videobg-3.mp4" />
        <div ref={Observador1Ref} className="observador"></div>
      </div>

      <div
        className={`page ${
          Observador1IsVisible ? "transition-style-out" : "transition-style"
        }`}
      >
        <div className={`pageinfo`}>
          <PageInfo />
        </div>

        <div className="presentacion-2">
          <PageVideo2 src="videobg-2.mp4" isEstatico={false}></PageVideo2>
        </div>

        {/* <Presentacion src="videobg-5.mp4" isEstatico={true}></Presentacion> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
