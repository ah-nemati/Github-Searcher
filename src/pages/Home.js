import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "../components/Button";
import { ListItem } from "../components/ListItem";
import { getUser, clearData } from "../Redux/Action";
import "./../index.css";

export const Home = () => {
  const dispatch = useDispatch();
  const [isClear, setisClear] = useState(null);
  const [userName, setUserName] = useState("");
  const data = useSelector((state) => state.item);
  const getData = () => {
    dispatch(clearData());
    fetch(`https://api.github.com/search/users?q=${userName}`)
      .then((res) => res.json())
      .then((data) =>
        data.items.map((item) => {
          dispatch(getUser(item.avatar_url, item.url, item.login, item.id));
          setisClear(true);
          setUserName("");
        })
      );
  };
  const clear = () => {
    setisClear(false);
    dispatch(clearData());
  };
  return (
    <div>
      <div className="flex_row">
      <input
        type="text"
        placeholder="Search Username..."
        required
        value={userName}
        className="lg"
        onChange={(e) => setUserName(e.target.value)}
      />
      </div>
      <Button color="dark" width="lg" value="Submit" onClick={getData} />
      {isClear ? (
        <Button color="gray" width="lg" value="Clear" onClick={clear} />
      ) : (
        ""
      )}
      <ListItem data={data} />
    </div>
  );
};
