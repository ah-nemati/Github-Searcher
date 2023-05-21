import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "../components/Button";
import { ListItem } from "../components/ListItem";
import { getUser, clearData } from "../Redux/Action";
import "./../index.css";
import axios from "axios";

export const Home = () => {
  const dispatch = useDispatch();
  const [isClear, setisClear] = useState(null);
  const [userName, setUserName] = useState("");
  const data = useSelector((state) => state.item);

  const clear = () => {
    setisClear(false);
    dispatch(clearData());
  };

  useEffect(() => {
    document
      .querySelector("#input")
      .addEventListener("input", (event) => setUserName(event.target.value));
    if (userName.length > 0) {
      dispatch(clearData());
      axios
        .get(`https://api.github.com/search/users?q=${userName}`, {
          headers: {
            Authorization: "Bearer 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",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        })
        .then((res) =>
          res.data.items.map((item) => {
            dispatch(getUser(item.avatar_url, item.url, item.login, item.id));
            setisClear(true);
            setUserName("");
          })
        )
        .catch((err) => alert(err.message));
    }
  }, [userName, dispatch]);

  return (
    <div>
      <div className="flex_row">
        <input
          type="text"
          placeholder="Search Username..."
          required
          className="lg"
          id="input"
        />
      </div>
      {isClear ? (
        <Button color="gray" width="lg" value="Clear" onClick={clear} />
      ) : (
        ""
      )}
      <ListItem data={data} />
    </div>
  );
};
