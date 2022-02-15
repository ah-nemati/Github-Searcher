import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetailuserData } from "../Redux/Action";
import { Button } from "./Button";

export const Item = ({ url, avatar_url, login }) => {
  const dispatch = useDispatch();
  const getDetailUser = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getDetailuserData(data)));
  };
  return (
    <div className="item">
      <img src={avatar_url} alt="avatar" />
      <h3>{login}</h3>
      <Link
        to="/user"
        className="md"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          color="primary"
          width="md"
          value="More"
          onClick={getDetailUser}
        ></Button>
      </Link>
    </div>
  );
};
