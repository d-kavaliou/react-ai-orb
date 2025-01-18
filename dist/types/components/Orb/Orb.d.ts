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
export declare const Orb: () => React.JSX.Element;
export default Orb;
