import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import ProfilePopup from './ProfilePopup'
import UserPopup from './UserPopup'
import { renderWithRedux } from '../../utils/renderWithRedux'


describe('ProfilePopup', () => {
    it('submit click', () => {
        window.HTMLCanvasElement.prototype.getContext = () => {}
        const { getByText } = renderWithRedux(<ProfilePopup />)
    })
})

