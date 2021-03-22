import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event'
import Login from './Login'

jest.mock('react-router-dom', () => {
    return {
        Link: () => { return(<div data-testid='link' />) },
    }
})

jest.mock('react-redux', () => {
    return {
        useDispatch: jest.fn()
    }
})

describe('Login', () => {
    it('text', () => {
        render(<Login />)
        expect(screen.getByText(/authorization/i)).toBeInTheDocument()
    })

    it('sign in', () => {
        render(<Login />)
        const mockLoginFn = jest.fn()
        document.querySelector('.auth__button').onclick = mockLoginFn;
        userEvent.click(screen.getByRole('button'))
        expect(mockLoginFn).toHaveBeenCalledTimes(1)
    })
})
