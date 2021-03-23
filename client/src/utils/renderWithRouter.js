import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

export const renderWithRouter = (
  component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  )
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  }
}
