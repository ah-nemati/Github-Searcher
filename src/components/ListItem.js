import React from "react";
import "./index.css";
import { Item } from "./Item";

export const ListItem = ({ data }) => {
  return (
    <div className="list">
      {data.map((item) => (
        <Item
          url={item.url}
          avatar_url={item.avatar_url}
          login={item.login}
          key={item.id}
        />
      ))}
    </div>
  );
};
