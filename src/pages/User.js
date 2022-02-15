import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { useDispatch } from "react-redux";
import { clearDetail } from "../Redux/Action";

export const User = () => {
  const dispatch = useDispatch();
  const {
    name,
    avatar_url,
    bio,
    html_url,
    login,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
    location,
    company,
    hireable,
    repos_url,
  } = useSelector((state) => state.detail ? state.detail : {});
  console.log(bio);
  const reset = () => {
    dispatch(clearDetail());
  };
  return (
    <Layout>
      {name ? (
        <div className="flex_col gap">
          <div className="flex_row">
            <Link to={"/"}>
              <Button
                value="Back To Search"
                width={"reset_margin"}
                onClick={reset}
              />
            </Link>
            <span>hireable : </span>
            {hireable ? (
              <img src="true.png" alt="false" width={25} height={25} />
            ) : (
              <img src="false.png" alt="false" width={25} height={25} />
            )}
          </div>
          <div className="card">
            <div className="flex_col">
              <img
                src={avatar_url}
                alt="avatar"
                width={150}
                height={150}
                style={{ borderRadius: 80 }}
              />
              <span className="text_center">{name}</span>
              <span className="text_center">{location}</span>
            </div>
            {bio ? (
              <div className="flex_col">
                <span style={{ fontWeight: "bold" }}>Bio : </span>
                <p>{bio}</p>
                <a href={html_url}>
                  <Button
                    color={"dark"}
                    value="Visit Github Page"
                    width={"sm"}
                  />
                </a>
                <span>Login : {login}</span>
                <span>Company : {company}</span>
                <span>Website : {blog}</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="card_center">
            <Button
              value={`Followers : ${followers}`}
              width="reset_margin x danger"
            />
            <Button value={`Following : ${following}`} width="reset_margin x" />
            <Button
              value={`Public Repos : ${public_repos}`}
              width="reset_margin x success"
            />
            <Button
              value={`Public Gists : ${public_gists}`}
              width="reset_margin x dark"
            />
          </div>
          {repos_url.map((item) => (
            <div className="card_item" key={item.id}>
              <a href={item.html_url}>{item.name}</a>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};