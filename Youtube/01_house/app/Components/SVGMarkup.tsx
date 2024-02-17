import React from "react";

type Props = {};

const SVGMarkup = (props: Props) => {
  return (
    <svg height={0} width={0} style={{ position: "absolute" }}>
      <defs>
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
        <clipPath
          id="clip-main"
          data-state="wave"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.00079113924050632911392405063291139, 0.00157482795004645742452637049402)"
        >
          <path
            d={
              "m.5.5h1263v485.06l-204.24,108.36c-67.92,36.04-145.87,48.56-221.66,35.6L91.62,502.02C38.99,493.02.5,447.4.5,394V.5Z"
            }
          />
        </clipPath>

        <clipPath
          id="clip-alt"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.00079113924050632911392405063291139, 0.00157482795004645742452637049402)"
        >
          <path d="m0,464V0h1263v485l-204,108c-34,17-88,39-157,41l-825-85C34,545,0,508,0,464Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGMarkup;
