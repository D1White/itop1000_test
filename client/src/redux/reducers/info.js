const initialState = {
    users: null,
    statistic: null,
};

const info = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
            };
        case "SET_STATISTIC":
            return {
                ...state,
                statistic: action.payload,
            };
        default:
            return state;
    }
};

export default info;
