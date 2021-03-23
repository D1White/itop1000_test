const initialState = {
  profiles: [],
  isLoading: false,
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILES':
      return {
        ...state,
        profiles: action.payload,
        isLoading: false,
      }
    case 'SET_PROFILES_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default profiles
