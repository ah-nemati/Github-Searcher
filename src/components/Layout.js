import React from "react";
import "./Layout.css";

export const Layout = (props) => {
  return (
    <div className="main">
      <div className="container">{props.children}</div>
    </div>
  );
};
