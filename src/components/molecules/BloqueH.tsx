import useIntersection from "../hooks/useIntersection";

type Props = {
  img: string;
  description: string;
  alt: string;
  textPosition?: string;
};

function BloqueH({ description, img, alt, textPosition = "right" }: Props) {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };

  const [blockHIsVisible, BloqueHMyRef] = useIntersection(options);

  if (textPosition === "right") {
    return (
      <div ref={BloqueHMyRef}>
        <div className="blockH">
          <img
            src={img}
            alt={alt}
            className={`imagenEstandar animationBasic ${
              blockHIsVisible ? "originalPositionR" : "left"
            }`}
          />
          <div
            className={` animationBasic ${
              blockHIsVisible ? "originalPositionR" : "right"
            }`}
          >
            <p className="title-xl max-w">{description}</p>
          </div>
        </div>
      </div>
    );
  } else if (textPosition === "left") {
    console.log(blockHIsVisible);
    return (
      <div ref={BloqueHMyRef}>
        <div className="blockH">
          <div
            className={`animationBasic ${
              blockHIsVisible ? "originalPositionL" : "left"
            }`}
          >
            <p className="title-xl max-w">{description}</p>
          </div>
          <img
            src={img}
            alt={alt}
            className={`imagenEstandar animationBasic ${
              blockHIsVisible ? "originalPositionL" : "right"
            }`}
          />
        </div>
      </div>
    );
  }
}

export default BloqueH;
