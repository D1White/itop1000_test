import { act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Users from "./Users";
import axios from 'axios'
import { renderWithRedux } from '../../utils/renderWithRedux'

const users = [
    {
        _id: '604a03c47f815a05e8404123',
        isAdmin: false,
        username: 'username',
        email: 'email@gmail.com',
        password: 'd415a330f564dbcee53b209b5a99dcde'
    },
    {
        _id: '604a03c47f815a05e8404f23',
        isAdmin: true,
        username: 'username',
        email: 'email@gmail.com',
        password: 'd415a330f564dbcee53b209b5a99ecde'
    }
]

jest.mock('../../components/Header/Header.jsx', () => () => (
    <header />
))

jest.mock('react-router-dom', () => {
    return {
        Link: () => { return(<div data-testid='userCard' />) },
    }
})

jest.mock("axios");

describe('Users', () => {
    it('fetch users', async () => {
        const promise = Promise.resolve({ data: { data: users  } });
        axios.get.mockImplementationOnce(() => promise);
        const { getAllByTestId } = renderWithRedux(<Users />)
        await act(() => promise);
        expect(getAllByTestId('userCard')).toHaveLength(2)
    })
})
