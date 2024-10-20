import * as React from "react";
type Props = {
  clase?: string;
};
const SvgGarabato = ({ clase }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={clase}
  >
    <defs>
      <linearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(0, 0, 0, 1)" />
        <stop offset="100%" stopColor="rgba(182.968, 182.968, 182.968, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M32.6-20.4c5.4 11 2.8 25.2-4 34.6-6.8 9.5-17.7 14.3-29.4 14.7-11.6.5-24-3.5-28.5-11.6-4.4-8.1-.8-20.3 5.4-31.9 6.2-11.5 15.1-22.2 26.3-23.6 11.2-1.4 24.7 6.7 30.2 17.8Z"
      style={{
        transition: ".3s",
      }}
      transform="translate(50 50)"
    />
  </svg>
);
export default SvgGarabato;
