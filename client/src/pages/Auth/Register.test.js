import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import Register from './Register'

jest.mock('react-router-dom', () => ({
  Link: () => <div data-testid="link" />,
}))

describe('Register', () => {
  it('text', () => {
    render(<Register />)
    expect(screen.getByText('Create your account')).toBeInTheDocument()
  })

  it('sign up', () => {
    render(<Register />)
    const mockRegisterFn = jest.fn()
    document.querySelector('.auth__button').onclick = mockRegisterFn
    userEvent.click(screen.getByRole('button'))
    expect(mockRegisterFn).toHaveBeenCalledTimes(1)
  })
})
