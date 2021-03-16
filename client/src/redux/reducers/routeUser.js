const initialState = {
    routeUser: null,
    isLoading: false,
  };

  const user = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ROTE_USER":
            return {
                ...state,
                routeUser: action.payload,
                isLoading: false,
            };
        case "SET_ROTE_USER_LOADING":
            return {
                ...state,
                isLoading: action.payload,
            };
      default:
        return state;
    }
  };

  export default user;
