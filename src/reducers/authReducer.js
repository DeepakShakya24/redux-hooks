const initialState = {
  isloggedIn: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_AUTH":
      return {
        ...state,
        isloggedIn: !state.isloggedIn,
      };
    default:
      return state;
  }
};
