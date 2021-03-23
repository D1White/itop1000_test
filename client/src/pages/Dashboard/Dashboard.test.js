import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import Dashboard from './Dashboard'
import { renderWithRedux } from '../../utils/renderWithRedux'

const statistic = {
  users: 3,
  profiles: 12,
  adults: 5,
}

jest.mock('../../components/Header/Header.jsx', () => () => <header />)

jest.mock('../../components/DashboardCard/DashboardCard.jsx', () => () => (
  <div data-testid="dashboardCard" />
))

jest.mock('axios')

describe('Dashboard', () => {
  it('fetch statistic', async () => {
    const promise = Promise.resolve({ data: { statistic } })
    axios.get.mockImplementationOnce(() => promise)
    const { getAllByTestId } = renderWithRedux(<Dashboard />, {
      info: { statistic },
    })
    expect(getAllByTestId('dashboardCard')).toHaveLength(3)
  })
})
