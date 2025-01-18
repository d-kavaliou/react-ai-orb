import React, { useMemo } from "react";
import "./styles.css";

export interface OrbProps {
  /** Size of the orb in pixels */
  size?: number;
  /** Primary color of the orb gradient */
  color: string;
  /** Shining effect in the middle of the orb */
  shineMiddle?: boolean;
}

const colors = {
  primary: "#ffffff",
  secondary: "#a8d5ff",
  accent: "#4aa8ff",
  dark: "#0066ff",
};

const SvgElements = () => {
  return (
    <>
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="blob-a"
      >
        <defs>
          <linearGradient id="blob-a-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" />
            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blob-a-gradient)"
          d="M23.3,-31.9C28.4,-28.4,29.5,-19.2,31.1,-10.9C32.6,-2.6,34.7,4.7,33.5,11.7C32.3,18.6,27.8,25.3,21.6,28.8C15.5,32.3,7.8,32.6,-0.6,33.5C-9,34.4,-18.1,35.8,-24.8,32.5C-31.5,29.2,-35.9,21.2,-36.5,13.3C-37.2,5.4,-34.1,-2.4,-31.6,-10.4C-29.1,-18.3,-27.2,-26.6,-22.1,-30.1C-16.9,-33.6,-8.4,-32.3,0.3,-32.8C9.1,-33.3,18.2,-35.4,23.3,-31.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "0.3s" }}
        />
      </svg>

      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="blob-b"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stopColor="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stopColor="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M19.2,-27.1C25.6,-29.4,32.3,-26,33.8,-20.5C35.3,-15,31.7,-7.5,27.8,-2.2C23.9,3,19.8,6,16.8,8.9C13.8,11.8,11.9,14.6,9.3,18.8C6.7,23,3.3,28.6,-0.7,29.8C-4.7,31,-9.4,27.8,-16.7,26.2C-23.9,24.7,-33.6,24.8,-39.3,20.7C-45.1,16.7,-47,8.3,-45.4,0.9C-43.8,-6.5,-38.8,-13,-32.6,-16.3C-26.4,-19.6,-18.9,-19.7,-13.3,-17.9C-7.6,-16,-3.8,-12.2,1.3,-14.4C6.3,-16.6,12.7,-24.8,19.2,-27.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "0.3s" }}
        ></path>
      </svg>

      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="blob-shine"
      >
        <defs>
          <linearGradient id="blob-shine-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="white" offset="0%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#blob-shine-gradient)"
          d="M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "0.3s" }}
        ></path>
      </svg>

      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="blob-shine shine-b"
      >
        <defs>
          <linearGradient id="blob-shine-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="white" offset="0%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#blob-shine-gradient)"
          d="M12.3,-22.8C17.4,-18.4,23.8,-17.9,26.8,-14.8C29.8,-11.6,29.5,-5.8,29,-0.3C28.6,5.3,28,10.6,26.9,17.1C25.9,23.7,24.3,31.5,19.7,32.2C15.2,32.8,7.6,26.3,0.6,25.3C-6.4,24.3,-12.9,28.9,-16.8,27.9C-20.8,26.9,-22.3,20.3,-23.8,14.7C-25.3,9.2,-26.9,4.6,-30.1,-1.8C-33.3,-8.3,-38.1,-16.5,-35.4,-20.1C-32.7,-23.6,-22.5,-22.4,-15.3,-25.5C-8.2,-28.6,-4.1,-36,-0.2,-35.6C3.6,-35.2,7.3,-27.1,12.3,-22.8Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: "0.3s" }}
        ></path>
      </svg>
    </>
  );
};

export const Orb = ({
  size = 300,
  mainBgStart = "rgb(236, 133, 255)",
  mainBgEnd = "rgb(49, 138, 255)",
  shadowColor1 = "rgba(166, 35, 248, 0)",
  shadowColor2 = "rgba(121, 19, 255, 0.5)",
  shadowColor3 = "rgba(255, 255, 255, 0.9)",
  shadowColor4 = "rgb(253, 164, 250)",
  shapeAStart = "rgb(133, 210, 255)",
  shapeAEnd = "rgba(115, 49, 255, 0)",
  shapeBStart = "rgb(254, 245, 254)",
  shapeBMiddle = "rgb(253, 109, 255)",
  shapeBEnd = "rgba(203, 56, 255, 0)",
  shapeCStart = "rgba(254, 254, 254, 0)",
  shapeCMiddle = "rgba(254, 111, 255, 0)",
  shapeCEnd = "#7006fe",
  shapeDStart = "rgba(254, 254, 254, 0)",
  shapeDMiddle = "rgba(142, 111, 255, 0)",
  shapeDEnd = "#00eeff",
  animationSpeedBase = 1,
  animationSpeedHue = 1,
}) => {
  const cssVariables = useMemo(
    () =>
      ({
        "--main-bg-start": mainBgStart,
        "--main-bg-end": mainBgEnd,
        "--shadow-color-1": shadowColor1,
        "--shadow-color-2": shadowColor2,
        "--shadow-color-3": shadowColor3,
        "--shadow-color-4": shadowColor4,
        "--shape-a-start": shapeAStart,
        "--shape-a-end": shapeAEnd,
        "--shape-b-start": shapeBStart,
        "--shape-b-middle": shapeBMiddle,
        "--shape-b-end": shapeBEnd,
        "--shape-c-start": shapeCStart,
        "--shape-c-middle": shapeCMiddle,
        "--shape-c-end": shapeCEnd,
        "--shape-d-start": shapeDStart,
        "--shape-d-middle": shapeDMiddle,
        "--shape-d-end": shapeDEnd,
        "--animation-rotation-speed-base": `${1 / (animationSpeedBase * 0.5)}s`,
        "--animation-hue-speed-base": `${1 / (animationSpeedHue * 0.5)}s`,
      } as React.CSSProperties),
    [
      mainBgStart,
      mainBgEnd,
      shadowColor1,
      shadowColor2,
      shadowColor3,
      shadowColor4,
      shapeAStart,
      shapeAEnd,
      shapeBStart,
      shapeBMiddle,
      shapeBEnd,
      shapeCStart,
      shapeCMiddle,
      shapeCEnd,
      shapeDStart,
      shapeDMiddle,
      shapeDEnd,
      animationSpeedBase,
      animationSpeedHue,
    ]
  );

  return (
    <div
      style={{
        ...cssVariables,
      }}
    >
      <div className="orb-main">
        <div className="glass loc-glass" />
        <div className="shape-a loc-a" />
        <div className="shape-b loc-b" />
        <div className="shape-c loc-c" />
        <div className="shape-d loc-d" />

        <SvgElements />

        {/* Particle canvas 
        <canvas ref={canvasRef} className="absolute inset-0 mix-blend-screen" />
        */}
      </div>
    </div>
  );
};

export default Orb;
