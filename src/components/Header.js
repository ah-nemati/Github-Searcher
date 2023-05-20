import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="navbar">
      <h1>Github Search</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};
