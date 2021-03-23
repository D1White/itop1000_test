import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import { renderWithRedux } from '../../utils/renderWithRedux'

jest.mock('react-router-dom', () => ({
  Link: () => <div data-testid="link" />,
  Redirect: () => <div data-testid="redirect" />,
}))

describe('Login', () => {
  it('text', () => {
    const { getByText } = renderWithRedux(<Login />)
    expect(getByText(/authorization/i)).toBeInTheDocument()
  })

  it('redirect', () => {
    renderWithRedux(<Login />, {
      user: {
        loggedIn: true,
      },
    })
  })

  it('sign in', () => {
    const { getByRole } = renderWithRedux(<Login />)
    const mockLoginFn = jest.fn()
    document.querySelector('.auth__button').onclick = mockLoginFn
    userEvent.click(getByRole('button'))
    expect(mockLoginFn).toHaveBeenCalledTimes(1)
  })
})
