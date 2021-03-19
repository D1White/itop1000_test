import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import axios from 'axios'

const statistic = {
    users: 3,
    profiles: 12,
    adults: 5
}

jest.mock('../../components/Header/Header.jsx', () => () => (
    <header />
))

jest.mock('../../components/DashboardCard/DashboardCard.jsx', () => () => (
    <div data-testid='dashboardCard' />
))

jest.mock("axios");

describe('Dashboard', () => {
    it('fetch statistic', async () => {
        const promise = Promise.resolve({ data: { statistic } });
        axios.get.mockImplementationOnce(() => promise);
        const { getAllByTestId, debug } = render(<Dashboard />)
        await act(() => promise);
        expect(getAllByTestId('dashboardCard')).toHaveLength(3)
    })
})
