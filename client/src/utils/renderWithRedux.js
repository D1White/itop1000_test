import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import rootReducer from '../redux/reducers/index'

export const renderWithRedux = (component, initialState) => {
  const store = createStore(rootReducer, initialState || {}, applyMiddleware(thunk))
  if (initialState && initialState.user?.loggedIn) {
    console.log(<Provider store={store}>{component}</Provider>)
  }
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
