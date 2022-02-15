import axios from "axios";

export const getUser = (avatar_url, url, login, id) => {
  return {
    type: "GET_USER",
    payload: {
      avatar_url: avatar_url,
      url: url,
      login: login,
      id: id,
    },
  };
};

export const clearData = () => {
  return {
    type: "CLEAR_DATA",
  };
};

export const getDetailuserData = (value) => {
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
    hireable,
    company,
    location,
    repos_url,
  } = value;

  return async (dispatch) => {
    const { data } = await axios.get(repos_url);
    dispatch({
      type: "GET_DETAIL_USER",
      payload: {
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
        hireable,
        location,
        company,
        repos_url: data,
      },
    });
  };
};

export const clearDetail=()=>{
  return {
    type: "CLEAR_DETAIL",
  };
}