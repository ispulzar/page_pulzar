import useIntersection from "../hooks/useIntersection";
type Props = {
  title: string;
  img: string;
  description: string;
  alt: string;
};

function BloqueV({ title, description, img, alt }: Props) {
  
  const options = { threshold: 1, rootMargin: "0px 0px -10px 0px" };

  const [blockVIsVisible, blockVRef] = useIntersection(options);

  return (
    <div ref={blockVRef} className="contenedorBlock">
      <div className="blockV">
        <img
          src={img}
          alt={alt}
          className={`animationBasic ${
            blockVIsVisible ? "originalPosition" : "left"
          }`}
        />
        <div
          className={`animationBasic ${
            blockVIsVisible ? "originalPosition" : "right"
          }`}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BloqueV;
