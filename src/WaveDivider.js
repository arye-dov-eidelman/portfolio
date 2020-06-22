import React from "react";

const WaveDivider = props => (
  <svg
    className="hr-wave"
    version="1.1"
    baseProfile="full"
    width="100%"
    height="10vmin"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 50"
    preserveAspectRatio="none"
    {...props}
    style={{
      marginBottom: "-5px",
      marginTop: "-1px",
      zIndex: "-1",
      ...(props.style || {})
    }}
  >
    <path
      d="
        M   0.00,  15.27
        C 216.83, 115.92
          304.30, -68.61
          500.00,  32.03
        L 500.00, -77.00
        L   0.00, -77.00
        Z
      "
      style={{ fill: "currentColor" }}
    />
  </svg>
)

export default WaveDivider