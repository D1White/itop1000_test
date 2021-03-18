import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DashboardCard from "./DashboardCard";

describe("DashboardCard", () => {
    it("renders dashboard card component", () => {
        render(<DashboardCard title={'card title'} value={'card value'} />)

        expect(screen.getByText(/card title/i)).toBeInTheDocument();
        expect(screen.getByText(/card value/i)).toBeInTheDocument();

        expect(screen.queryByText(/null text/i)).not.toBeInTheDocument();
    });
});
