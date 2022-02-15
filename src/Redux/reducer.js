const initialState = {
  item: [],
  detail: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      const { avatar_url, url, login, id } = action.payload;
      return {
        ...state,
        item: [
          ...state.item,
          { avatar_url: avatar_url, url: url, login: login, id: id },
        ],
      };
    case "CLEAR_DATA":
      return { item: [] };
    case "GET_DETAIL_USER":
      return { ...state, detail: action.payload };
    case "CLEAR_DETAIL":
      return { item: [...state.item], detail: [] };
    default:
      return state;
  }
};
