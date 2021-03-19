import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../utils/renderWithRedux'

import UserController from "./UserController";


const admin = {
    _id: '604a03c47f815a05e8404f23',
    isAdmin: true,
    username: 'username',
    email: 'email@gmail.com',
    password: 'd415a330f564dbcee53b209b5a99ecde'
}

const user = {
    _id: '604a03c47f815a05e8404f23',
    isAdmin: false,
    username: 'username',
    email: 'email@gmail.com',
    password: 'd415a330f564dbcee53b209b5a99ecde'
}


jest.mock('react-router-dom', () => {
    return {
        Redirect: () => { return(<div>Login</div>) },
    }
})

describe('UserController', () => {
    it('render admin', () => {
        const { getByText, getAllByRole } = renderWithRedux(<UserController propsUser={admin} />, {
            user: { user: admin }
        })

        expect(getByText('admin')).toBeInTheDocument()
        expect(getAllByRole('button')).toHaveLength(2)
    })

    it('render user', () => {
        const { getByText } = renderWithRedux(<UserController propsUser={user} />, {
            user: { user }
        })

        expect(getByText('user')).toBeInTheDocument()
    })

    it('loading', () => {
        const { getByText } = renderWithRedux(<UserController />)
        expect(getByText(/loading/i)).toBeInTheDocument()
    })

    it('edit click', () => {
        const popupVisible = jest.fn()
        const { getByLabelText } = renderWithRedux(
            <UserController propsUser={admin} popupVisible={popupVisible} />,
            {
                user: { user: admin }
            }
        )

        expect(getByLabelText(/edit/i)).toBeInTheDocument()
        userEvent.click(getByLabelText(/edit/i))
        expect(popupVisible).toBeCalledTimes(1)
    })

    it('delte click', () => {
        window.confirm = () => {return true}
        const deleteFunc = jest.fn()
        const { getByLabelText, getByText } = renderWithRedux(
            <UserController propsUser={admin}/>,
            {
                user: { user: admin }
            }
        )

        expect(getByLabelText(/delete/i)).toBeInTheDocument()
        document.querySelector('.delete').onclick = deleteFunc;
        userEvent.click(getByLabelText(/delete/i))
        expect(deleteFunc).toBeCalledTimes(1)

        expect(getByText(/login/i)).toBeInTheDocument()
    })
})

