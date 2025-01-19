import {
  defaultAnimationSpeedBase,
  defaultAnimationSpeedHue,
  defaultHueRotation,
  defaultMainOrbHueAnimation,
  defaultSize,
} from "./constants";
import { colorPalettes } from "./palette/colorPalettes";
import { ReactAIOrbProps } from "./types";

export const oceanDepthsPreset: ReactAIOrbProps = {
  palette: colorPalettes.oceanDepths,
  blobBOpacity: 0.3,
  size: defaultSize,
  animationSpeedBase: defaultAnimationSpeedBase,
  animationSpeedHue: defaultAnimationSpeedHue,
  hueRotation: defaultHueRotation,
  mainOrbHueAnimation: defaultMainOrbHueAnimation,
};

export const galaxyPreset: ReactAIOrbProps = {
  palette: colorPalettes.galaxy,
  blobBOpacity: 0.3,
  size: defaultSize,
  animationSpeedBase: 1.3,
  animationSpeedHue: defaultAnimationSpeedHue,
  hueRotation: 360,
  mainOrbHueAnimation: defaultMainOrbHueAnimation,
};

export const caribeanPreset: ReactAIOrbProps = {
  palette: colorPalettes.caribean,
  size: defaultSize,
  animationSpeedBase: defaultAnimationSpeedBase,
  animationSpeedHue: defaultAnimationSpeedHue,
  hueRotation: defaultHueRotation,
  mainOrbHueAnimation: defaultMainOrbHueAnimation,
};

export const cherryBlossomPreset: ReactAIOrbProps = {
  palette: colorPalettes.cherryBlossom,
  size: defaultSize,
  animationSpeedBase: defaultAnimationSpeedBase,
  animationSpeedHue: defaultAnimationSpeedHue,
  hueRotation: 0,
  mainOrbHueAnimation: defaultMainOrbHueAnimation,
};

export const emeraldPreset: ReactAIOrbProps = {
  palette: colorPalettes.emerald,
  size: defaultSize,
  animationSpeedBase: defaultAnimationSpeedBase,
  animationSpeedHue: defaultAnimationSpeedHue,
  hueRotation: 0,
  blobBOpacity: 0.2,
  mainOrbHueAnimation: defaultMainOrbHueAnimation,
};

export const multiColorPreset: ReactAIOrbProps = {
  palette: colorPalettes.cosmicNebula,
  size: defaultSize,
  animationSpeedBase: defaultAnimationSpeedBase,
  animationSpeedHue: 0.25,
  hueRotation: 360,
  mainOrbHueAnimation: true,
};
