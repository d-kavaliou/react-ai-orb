import React, { useMemo } from "react";
import "./styles.css";
import { SvgElements } from "../SvgElements/SvgElements";

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

export const Orb = ({
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
  size = 1,
  animationSpeedBase = 1,
  animationSpeedHue = 1,
  hueRotation = 120,
  mainOrbHueAnimation = false,
}) => {
  const cssVariables = useMemo(
    () =>
      ({
        "--react-ai-orb-size": `${size * 82}px`,
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
        "--hue-rotation": `${hueRotation}deg`,
        "--main-hue-animation": mainOrbHueAnimation
          ? "hueShift var(--animation-hue-speed-base) linear infinite"
          : "none",
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
      hueRotation,
      mainOrbHueAnimation,
      size,
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

        <SvgElements color1={mainBgStart} color2={mainBgEnd} />

        {/* Particle canvas 
        <canvas ref={canvasRef} className="absolute inset-0 mix-blend-screen" />
        */}
      </div>
    </div>
  );
};

export default Orb;
