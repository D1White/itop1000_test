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
    // it('checked', () => {
    //     const setChecked = jest.fn()

    //     const { container, getByRole } = render(
    //         <Checkbox checked={false} setChecked={setChecked} />
    //     )
    //     const checkbox = getByRole('checkbox');
    //     const label = container.firstChild;
    //     expect(checkbox.checked).toEqual(false);
    //     userEvent.click(label);
    //     expect(setChecked).toHaveBeenCalledTimes(1);
    // })

    // it('text', () => {
    //     render(<Checkbox text={'test text'} />);
    //     expect(screen.getByText(/test text/i)).toBeInTheDocument();
    //     expect(screen.queryByText(/null text/i)).not.toBeInTheDocument();
    // })
});
