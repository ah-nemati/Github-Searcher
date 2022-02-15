import React from "react";
import "./Button.css";

export const Button = ({ color, value, width, onClick }) => {
  return (
    <button className={`${color} ${width}`} onClick={onClick}>
      {value}
    </button>
  );
};
