import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import { renderWithRedux } from '../../utils/renderWithRedux'

const admin = {
  _id: '604a03c47f815a05e8404f23',
  isAdmin: true,
  username: 'username',
  email: 'email@gmail.com',
  password: 'd415a330f564dbcee53b209b5a99ecde',
}

jest.mock('react-router-dom', () => ({
  Link: () => <div data-testid="link" className="header__link" />,
}))

describe('Header', () => {
  it('logout', () => {
    const { getByTestId } = renderWithRedux(<Header />)
    const logoutFunc = jest.fn()

    const logoutBtn = getByTestId('link')
    expect(logoutBtn).toBeInTheDocument()
    document.querySelector('.header__link').onclick = logoutFunc
    userEvent.click(logoutBtn)
    expect(logoutFunc).toHaveBeenCalledTimes(1)
  })

  it('admin render', () => {
    const { getAllByTestId } = renderWithRedux(<Header />, {
      user: { user: admin },
    })
    expect(getAllByTestId('link')).toHaveLength(4)
  })
})
