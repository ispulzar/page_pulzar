import useIntersection from "../hooks/useIntersection";

function Observador() {
  const options = { threshold: 1 };
  const options2 = { threshold: 0.5 };

  const [isVisible, myRef] = useIntersection(options);
  const [isVisible2, myRef2] = useIntersection(options2);

  return (
    <div className="bg-black">
      <div className="h-screen">
        <p ref={myRef2}  className={`${isVisible2 ? "animationEntrada" : "animationSalida"} parrafo`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad tempora
          blanditiis veritatis quisquam molestiae accusamus officiis delectus
          illo velit distinctio facere quae, totam corrupti deleniti
          consequatur! Ducimus aut id quos at incidunt veritatis. Voluptatem,
          cum.
        </p>
      </div>
      <div className="h-screen">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorum
          sunt impedit.
        </p>
      </div>
      <div className="h-screen">
        <p ref={myRef} className={isVisible ? "bg-green-700" : "bg-red-700"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad tempora
          blanditiis veritatis quisquam molestiae accusamus officiis delectus
          illo velit distinctio facere quae, totam corrupti deleniti
          consequatur! Ducimus aut id quos at incidunt veritatis. Voluptatem,
          cum.
        </p>
      </div>
    </div>
  );
}

export default Observador;
