import React from "react";

// @ts-ignore
const CircularProgressBar = ({ value, max }) => {
  // Calculate the circumference of the circle
  const radius = 80; // radius of the circle
  const stroke = 10; // width of the stroke
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Calculate the stroke dash offset
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="block">
      <circle
        stroke="black"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default CircularProgressBar;
