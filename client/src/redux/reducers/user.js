const initialState = {
    user: null,
    isLoaded: false
  };

  const user = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
            ...state,
            user: action.payload,
            isLoaded: false,
        };
    case "SET_USER_LOADED":
        return {
            ...state,
            isLoaded: action.payload,
        };
      default:
        return state;
    }
  };

  export default user;
