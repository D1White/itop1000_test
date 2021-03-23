import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import * as reactRedux from 'react-redux'
import Login from './Login'
import { renderWithRedux } from '../../utils/renderWithRedux'

jest.mock('react-router-dom', () => ({
  Link: () => <div data-testid="link" />,
  Redirect: jest.fn(),
}))

// const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch')
// const mockUseSelector = jest.spyOn(reactRedux, 'useSelector')
jest.mock('react-redux', () => {
  const mockDispatch = jest.fn()
  return {
    useDispatch: mockDispatch,
    useSelector: () => ({ user: { loggedIn: true } }),
  }
})

// jest.mock('../../redux/actions/user')

describe('Login', () => {
  it('text', () => {
    // const { debug } = renderWithRedux(<Login />, {
    //   user: {
    //     loggedIn: true,
    //   },
    // })
    render(<Login />)
    screen.debug()
    expect(screen.getByText(/authorization/i)).toBeInTheDocument()
  })

  // it('sign in', () => {
  //   render(<Login />)
  //   const mockLoginFn = jest.fn()
  //   document.querySelector('.auth__button').onclick = mockLoginFn
  //   userEvent.click(screen.getByRole('button'))
  //   expect(mockLoginFn).toHaveBeenCalledTimes(1)
  // })
})
