// src/components/Orb.jsx
import React from "react";
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
  if (size <= 0.5) return "wpuc-orb-size-xs";
  if (size <= 0.75) return "wpuc-orb-size-sm";
  if (size <= 1.25) return "wpuc-orb-size-md";
  if (size <= 1.75) return "wpuc-orb-size-lg";
  if (size <= 2.5) return "wpuc-orb-size-xl";
  return "wpuc-orb-size-xxl";
};

const getSpeedClass = (speed: number) => {
  if (speed <= 0.5) return "wpuc-orb-speed-slow";
  if (speed <= 0.9) return "wpuc-orb-speed-medium";
  if (speed <= 1.5) return "wpuc-orb-speed-fast";
  return "wpuc-orb-speed-very-fast";
};

const getHueRotationClass = (rotation: number) => {
  if (rotation <= 60) return "wpuc-orb-hue-small";
  if (rotation <= 180) return "wpuc-orb-hue-medium";
  if (rotation <= 270) return "wpuc-orb-hue-large";
  return "wpuc-orb-hue-full";
};

const getOpacityClass = (opacity: number, prefix: string) => {
  // prefix should be "wpuc-blob-a" or "wpuc-blob-b"
  if (opacity <= 0.2) return `${prefix}-opacity-10`;
  if (opacity <= 0.4) return `${prefix}-opacity-30`;
  if (opacity <= 0.6) return `${prefix}-opacity-50`;
  if (opacity <= 0.8) return `${prefix}-opacity-70`;
  return `${prefix}-opacity-90`;
};

const getPaletteClass = (palette: any) => {
  for (const [name, preset] of Object.entries(colorPalettes)) {
    if (
      palette.mainBgStart === preset.mainBgStart &&
      palette.mainBgEnd === preset.mainBgEnd
    ) {
      // convert camelCase name → kebab-case
      const kebab = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      return `wpuc-orb-palette-${kebab}`;
    }
  }
  return "wpuc-orb-palette-cosmic-nebula";
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
  const sizeClass     = getSizeClass(size);
  const speedBase     = getSpeedClass(animationSpeedBase);
  const speedHue      = getSpeedClass(animationSpeedHue);
  const hueRotClass   = getHueRotationClass(hueRotation);
  const blobAClass    = getOpacityClass(blobAOpacity, "wpuc-blob-a");
  const blobBClass    = getOpacityClass(blobBOpacity, "wpuc-blob-b");
  const paletteClass  = getPaletteClass(palette);
  const hueAnimClass  = mainOrbHueAnimation ? "wpuc-orb-main-hue-animated" : "";
  const shadowClass   = noShadow ? "wpuc-orb-no-shadow" : "";

  const rootClasses = [
    "wpuc-orb-root",
    sizeClass,
    speedBase,
    speedHue,
    hueRotClass,
    blobAClass,
    blobBClass,
    paletteClass,
    hueAnimClass,
    shadowClass
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClasses}>
      <div className="wpuc-orb-main">
        <div className="wpuc-glass wpuc-loc-glass" />
        <div className="wpuc-shape-a wpuc-loc-a" />
        <div className="wpuc-shape-b wpuc-loc-b" />
        <div className="wpuc-shape-c wpuc-loc-c" />
        <div className="wpuc-shape-d wpuc-loc-d" />
        <SvgElementsCSP paletteClass={paletteClass} />
      </div>
    </div>
  );
};

export default Orb;
