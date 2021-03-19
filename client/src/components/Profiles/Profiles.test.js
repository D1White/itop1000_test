import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../utils/renderWithRedux'
import Profiles from "./Profiles";

jest.mock('../ProfileCard/ProfileCard.jsx', () => () => (
    <div data-testid='profileCard' />)
)

// const mockFetchFn = jest.fn(() => Promise.resolve())

// jest.mock('../../redux/actions/profiles.js', () => {
//     return {
//         fetchProfiles: jest.fn(() => Promise.resolve({}))
//     }
// })

// const mockDispatchFn = jest.fn(() => Promise.resolve())

// jest.mock('react-redux', () => {
//     return jest.fn(() => {
//         useDispatch: mockDispatchFn
//     })
// })

const profiles = [{
    _id: '604a03c47f815a05e8404f28',
    name: 'Name_1',
    gender: 'male',
    birthdate: new Date(),
    city: 'City_1',
    user_id: '604a03c46f815a05e8404f28'
}, {
    _id: '604fcxc47f815a05e8404f28',
    name: 'Name_2',
    gender: 'female',
    birthdate: new Date(),
    city: 'City_2',
    user_id: '604a03c46f815a05e8404f29'
}]


describe('Profiles', () => {

    it('title', () => {
        const { getByText } = renderWithRedux(<Profiles />, {
            profiles: { profiles: [] }
        })
        expect(getByText(/profiles/i)).toBeInTheDocument()
    })

    it('loading', () => {
        const { getByText } = renderWithRedux(<Profiles />, {
            profiles: { profiles: [], isLoading: true}
        })
        expect(getByText(/loading/i)).toBeInTheDocument()
    })

    it('create profile', () => {
        const createFunc = jest.fn()
        const { getByText } = renderWithRedux(<Profiles setEditableProfile={createFunc}/>, {
            profiles: { profiles: [] }
        })

        userEvent.click(getByText(/Crearte/i))
        expect(createFunc).toHaveBeenCalledTimes(1)
    })

    it('render profile cards', () => {
        const { getAllByTestId } = renderWithRedux(<Profiles/>, {
            profiles: { profiles }
        })
        expect(getAllByTestId('profileCard')).toHaveLength(2)
    })

    // it('fetch profiles', async () => {
    //     const { getByText , debug } = renderWithRedux(<Profiles user_id={'604a03c46f815a05e8404f29'} />)
    //     expect(mockFetchFn).toBeCalledTimes(1)
    // })
})

