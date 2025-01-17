import React from "react";
import "./styles.css";

export interface OrbProps {
  /** Size of the orb in pixels */
  size?: number;
  /** Primary color of the orb gradient */
  color: string;
}

const Orb = ({ size = 200, color = "purple" }: OrbProps) => {
  return (
    <>
      <div className="main">
        <div className="in" />
      </div>
    </>
  );
};

export default Orb;
