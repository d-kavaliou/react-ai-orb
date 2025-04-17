import React, { useEffect, useRef } from "react";
import "./styles.css";
import "./orb.css";
import { SvgElements } from "../SvgElements/SvgElements";
import { colorPalettes } from "../../palette/colorPalettes";
import {
  baseOrbSize,
  baseShapeSize,
  defaultAnimationSpeedBase,
  defaultAnimationSpeedHue,
  defaultBlobAOpacity,
  defaultBlobBOpacity,
  defaultHueRotation,
  defaultMainOrbHueAnimation,
  defaultNoShadowValue,
  defaultSize,
} from "../../constants";
import { ReactAIOrbProps } from "../../types";

// Helper to generate a unique ID for each orb instance
let orbCounter = 0;
const getUniqueOrbId = () => `react-ai-orb-${orbCounter++}`;

export const Orb = ({
  palette = colorPalettes.cosmicNebula,
  size = defaultSize,
  animationSpeedBase = defaultAnimationSpeedBase,
  animationSpeedHue = defaultAnimationSpeedHue,
  hueRotation = defaultHueRotation,
  mainOrbHueAnimation = defaultMainOrbHueAnimation,
  blobAOpacity = defaultBlobAOpacity,
  blobBOpacity = defaultBlobBOpacity,
  noShadow = defaultNoShadowValue,
}: ReactAIOrbProps) => {
  const orbId = useRef(getUniqueOrbId());
  const styleId = `${orbId.current}-style`;

  // Add the CSS variables through a <style> tag instead of inline styles
  useEffect(() => {
    const shadowValue = noShadow
      ? "none"
      : `var(--shadow-color-1) 0px 4px 6px 0px, 
         var(--shadow-color-2) 0px 5px 10px 0px,
         var(--shadow-color-3) 0px 0px 1px 0px inset,
         var(--shadow-color-4) 0px 1px 7px 0px inset`;

    const cssText = `
      .${orbId.current} {
        --react-ai-orb-size: ${size * baseOrbSize}px;
        --shapes-size: ${size * baseShapeSize}px;
        --main-bg-start: ${palette.mainBgStart};
        --main-bg-end: ${palette.mainBgEnd};
        --shadow-color-1: ${palette.shadowColor1};
        --shadow-color-2: ${palette.shadowColor2};
        --shadow-color-3: ${palette.shadowColor3};
        --shadow-color-4: ${palette.shadowColor4};
        --main-shadow: ${shadowValue};
        --shape-a-start: ${palette.shapeAStart};
        --shape-a-end: ${palette.shapeAEnd};
        --shape-b-start: ${palette.shapeBStart};
        --shape-b-middle: ${palette.shapeBMiddle};
        --shape-b-end: ${palette.shapeBEnd};
        --shape-c-start: ${palette.shapeCStart};
        --shape-c-middle: ${palette.shapeCMiddle};
        --shape-c-end: ${palette.shapeCEnd};
        --shape-d-start: ${palette.shapeDStart};
        --shape-d-middle: ${palette.shapeDMiddle};
        --shape-d-end: ${palette.shapeDEnd};
        --blob-a-opacity: ${blobAOpacity};
        --blob-b-opacity: ${blobBOpacity};
        --animation-rotation-speed-base: ${1 / (animationSpeedBase * 0.5)}s;
        --animation-hue-speed-base: ${1 / (animationSpeedHue * 0.5)}s;
        --hue-rotation: ${hueRotation}deg;
        --main-hue-animation: ${
          mainOrbHueAnimation
            ? "hueShift var(--animation-hue-speed-base) linear infinite"
            : "none"
        };
      }
    `;

    // Create or update the style element
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = cssText;

    // Clean up on unmount
    return () => {
      const element = document.getElementById(styleId);
      if (element) {
        element.parentNode?.removeChild(element);
      }
    };
  }, [
    orbId,
    styleId,
    size,
    palette,
    animationSpeedBase,
    animationSpeedHue,
    hueRotation,
    mainOrbHueAnimation,
    blobAOpacity,
    blobBOpacity,
    noShadow,
  ]);

  return (
    <div className={`orb-root ${orbId.current}`}>
      <div className="orb-main">
        <div className="glass loc-glass" />
        <div className="shape-a loc-a" />
        <div className="shape-b loc-b" />
        <div className="shape-c loc-c" />
        <div className="shape-d loc-d" />
        <SvgElements color1={palette.mainBgStart} color2={palette.mainBgEnd} />
      </div>
    </div>
  );
};

export default Orb;