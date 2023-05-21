import { useDispatch } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { getDetailuserData } from "../Redux/Action";
import { Button } from "./Button";
import axios from "axios";

export const Item = ({ url, avatar_url, login }) => {
  const dispatch = useDispatch();
  const getDetailUser = () => {
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer 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",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res) => dispatch(getDetailuserData(res.data)))
      .catch((error) => redirect("/"));
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
