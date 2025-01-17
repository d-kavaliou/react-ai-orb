import React from "react";
import "./styles.css";
export interface OrbProps {
    /** Size of the orb in pixels */
    size?: number;
    /** Primary color of the orb gradient */
    color: string;
}
declare const Orb: ({ size, color }: OrbProps) => React.JSX.Element;
export default Orb;
