const initialState = {
    loggedIn: false,
  };

  const auth = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LOGIN":
        return {
            ...state,
            loggedIn: action.payload,
        };
      default:
        return state;
    }
  };

  export default auth;
