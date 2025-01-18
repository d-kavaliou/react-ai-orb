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
export declare const Orb: ({ size, mainBgStart, mainBgEnd, shadowColor1, shadowColor2, shadowColor3, shadowColor4, shapeAStart, shapeAEnd, shapeBStart, shapeBMiddle, shapeBEnd, shapeCStart, shapeCMiddle, shapeCEnd, shapeDStart, shapeDMiddle, shapeDEnd, animationSpeedBase, animationSpeedHue, mainOrbHueAnimation, }: {
    size?: number | undefined;
    mainBgStart?: string | undefined;
    mainBgEnd?: string | undefined;
    shadowColor1?: string | undefined;
    shadowColor2?: string | undefined;
    shadowColor3?: string | undefined;
    shadowColor4?: string | undefined;
    shapeAStart?: string | undefined;
    shapeAEnd?: string | undefined;
    shapeBStart?: string | undefined;
    shapeBMiddle?: string | undefined;
    shapeBEnd?: string | undefined;
    shapeCStart?: string | undefined;
    shapeCMiddle?: string | undefined;
    shapeCEnd?: string | undefined;
    shapeDStart?: string | undefined;
    shapeDMiddle?: string | undefined;
    shapeDEnd?: string | undefined;
    animationSpeedBase?: number | undefined;
    animationSpeedHue?: number | undefined;
    mainOrbHueAnimation?: boolean | undefined;
}) => React.JSX.Element;
export default Orb;
