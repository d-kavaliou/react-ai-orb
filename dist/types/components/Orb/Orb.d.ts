import React from "react";
import "./styles.css";
export interface OrbProps {
    /** Size of the orb in pixels */
    size?: number;
    /** Primary color of the orb gradient */
    color: string;
    /** Shining effect in the middle of the orb */
    shineMiddle?: boolean;
}
export declare const Orb: ({ palette, size, animationSpeedBase, animationSpeedHue, hueRotation, mainOrbHueAnimation, }: {
    palette?: import("../..").OrbPalette | undefined;
    size?: number | undefined;
    animationSpeedBase?: number | undefined;
    animationSpeedHue?: number | undefined;
    hueRotation?: number | undefined;
    mainOrbHueAnimation?: boolean | undefined;
}) => React.JSX.Element;
export default Orb;
