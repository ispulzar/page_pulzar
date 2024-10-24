import Presentacion from "./components/pages/Presentacion";
import { PageInfo } from "./components/pages/PageInfo";
import Footer from "./components/organisms/Footer";
import useIntersection from "./components/hooks/useIntersection";
import Dudes from "./components/organisms/Dudes";

function App() {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };

  const [Observador1IsVisible, Observador1Ref] = useIntersection(options);

  return (
    <div id="app">
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
        <div className="pagedudes">
          <Dudes></Dudes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
