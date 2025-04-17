import React from "react";
import "./styles.css";
import "./orb-presets.css";
import { SvgElementsCSP } from "../SvgElements/SvgElements";
import { colorPalettes } from "../../palette/colorPalettes";
import {
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

// Maps numeric values to predefined CSS classes
const getSizeClass = (size: number) => {
  if (size <= 0.5) return "orb-size-xs";
  if (size <= 0.75) return "orb-size-sm";
  if (size <= 1.25) return "orb-size-md";
  if (size <= 1.75) return "orb-size-lg";
  if (size <= 2.5) return "orb-size-xl";
  return "orb-size-xxl";
};

const getSpeedClass = (speed: number) => {
  if (speed <= 0.5) return "orb-speed-slow";
  if (speed <= 0.9) return "orb-speed-medium";
  if (speed <= 1.5) return "orb-speed-fast";
  return "orb-speed-very-fast";
};

const getHueRotationClass = (rotation: number) => {
  if (rotation <= 60) return "orb-hue-small";
  if (rotation <= 180) return "orb-hue-medium";
  if (rotation <= 270) return "orb-hue-large";
  return "orb-hue-full";
};

const getOpacityClass = (opacity: number, prefix: string) => {
  if (opacity <= 0.2) return `${prefix}-opacity-10`;
  if (opacity <= 0.4) return `${prefix}-opacity-30`;
  if (opacity <= 0.6) return `${prefix}-opacity-50`;
  if (opacity <= 0.8) return `${prefix}-opacity-70`;
  return `${prefix}-opacity-90`;
};

// Get palette class based on the closest match to predefined palettes
const getPaletteClass = (palette: any) => {
  // Compare the given palette with predefined palettes to find the closest match
  const palettes = Object.entries(colorPalettes);
  
  for (const [name, presetPalette] of palettes) {
    if (
      palette.mainBgStart === presetPalette.mainBgStart &&
      palette.mainBgEnd === presetPalette.mainBgEnd
    ) {
      return `orb-palette-${name}`;
    }
  }
  
  // Default to cosmic if no match is found
  return "orb-palette-cosmicNebula";
};

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
  // Map props to predefined CSS classes
  const sizeClass = getSizeClass(size);
  const speedBaseClass = getSpeedClass(animationSpeedBase);
  const speedHueClass = getSpeedClass(animationSpeedHue);
  const hueRotationClass = getHueRotationClass(hueRotation);
  const blobAOpacityClass = getOpacityClass(blobAOpacity, "blob-a");
  const blobBOpacityClass = getOpacityClass(blobBOpacity, "blob-b");
  const paletteClass = getPaletteClass(palette);
  const hueAnimationClass = mainOrbHueAnimation ? "orb-main-hue-animated" : "";
  const shadowClass = noShadow ? "orb-no-shadow" : "";

  // Combine all classes
  const rootClasses = [
    "orb-root",
    sizeClass,
    speedBaseClass,
    speedHueClass,
    hueRotationClass,
    blobAOpacityClass,
    blobBOpacityClass,
    paletteClass,
    hueAnimationClass,
    shadowClass
  ].filter(Boolean).join(" ");

  return (
    <div className={rootClasses}>
      <div className="orb-main">
        <div className="glass loc-glass" />
        <div className="shape-a loc-a" />
        <div className="shape-b loc-b" />
        <div className="shape-c loc-c" />
        <div className="shape-d loc-d" />
        <SvgElementsCSP paletteClass={paletteClass} />
      </div>
    </div>
  );
};

export default Orb;