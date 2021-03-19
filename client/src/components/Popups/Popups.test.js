import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import ProfilePopup from './ProfilePopup'
import UserPopup from './UserPopup'

jest.mock('../DateInput/DateInput.jsx', () => () => (
    <div data-testid='datePicker' />
))


// jest.mock('react-redux', () => {
//     const mockDispatchFn = jest.fn()
//     return  {
//         useDispatch: mockDispatchFn,
//         mockDispatchFn
//     }
// })

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}))

describe('ProfilePopup', () => {
    it('submit click', () => {
        const popupVisible = jest.fn()
        // const { getAllByRole } = renderWithRedux(<ProfilePopup popupVisible={popupVisible} />)
        render(<ProfilePopup popupVisible={popupVisible} />)
        const submitBtn = screen.getAllByRole('button')[0]
        const submitFunc = jest.fn()

        expect(submitBtn).toBeInTheDocument()
        document.querySelectorAll('.popup__button')[0].onclick = submitFunc;
        userEvent.click(submitBtn)
        expect(submitFunc).toBeCalledTimes(1)
    })

    it('cancel click', () => {
        const cancelFunc = jest.fn()
        // const { getAllByRole } = renderWithRedux(<ProfilePopup popupVisible={cancelFunc} />)
        render(<ProfilePopup popupVisible={cancelFunc} />)
        const cancelBtn = screen.getAllByRole('button')[1]

        expect(cancelBtn).toBeInTheDocument()
        userEvent.click(cancelBtn)
        expect(cancelFunc).toBeCalledTimes(1)
    })
})

describe('UserPopup', () => {
    it('submit click', () => {
        const popupVisible = jest.fn()
        render(<UserPopup popupVisible={popupVisible} />)
        const submitBtn = screen.getAllByRole('button')[0]
        const submitFunc = jest.fn()

        expect(submitBtn).toBeInTheDocument()
        document.querySelectorAll('.popup__button')[0].onclick = submitFunc;
        userEvent.click(submitBtn)
        expect(submitFunc).toBeCalledTimes(1)
    })

    it('cancel click', () => {
        const cancelFunc = jest.fn()
        render(<UserPopup popupVisible={cancelFunc} />)
        const cancelBtn = screen.getAllByRole('button')[1]

        expect(cancelBtn).toBeInTheDocument()
        userEvent.click(cancelBtn)
        expect(cancelFunc).toBeCalledTimes(1)
    })
})


