import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import ProfileCard from './ProfileCard'
import { renderWithRedux } from '../../utils/renderWithRedux'

describe('ProfileCard', () => {
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(() => {}),
  }))
  jest.mock('../../redux/actions/user.js', () => ({
    deleteProfile: jest.fn(() => Promise.resolve()),
  }))

  it('renders profile card component', async () => {
    window.HTMLCanvasElement.prototype.getContext = () => {}
    const setEditableProfile = jest.fn()
    const { getByText } = renderWithRedux(<ProfileCard setEditableProfile={setEditableProfile} />)

    userEvent.click(getByText('edit'))
    expect(setEditableProfile).toHaveBeenCalledTimes(1)
  })
})
