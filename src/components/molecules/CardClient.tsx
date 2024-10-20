import React from "react";
import useIntersection from "../hooks/useIntersection";

type Props = {
  nickName: string;
  codeClient: string;
  img: string;
};

function CardClient({
  nickName = "Nickname",
  codeClient = "CodeCliente",
  img = "#",
}: Props) {
  const options = { threshold: 1, rootMargin: "0px 0px 0px 0px" };
  const [cardClientIsVisible, cardClientRef] = useIntersection(options);

  return (
    <div ref={cardClientRef} className="card-client-ref">
      <div
        className={`card-client ${cardClientIsVisible ? "animationZoomOut" : "animaitonOpa"}`}
      >
        <div >
          <img
            className={`${cardClientIsVisible ? "animationRotateBorder" : "animaitonOpa"}`}
            src={img}
            alt="img"
          />
        </div>
        <div
          className={`card-text ${
            cardClientIsVisible ? "" : "animaitonOpa "
          }`}
        >
          <p>{nickName}</p>
          <p>{codeClient}</p>
        </div>
      </div>
    </div>
  );
}

export default CardClient;
