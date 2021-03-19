import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateInput from './DateInput'

jest.mock('react-date-picker', () => () => (
    <div data-testid='datePicker' />)
)

describe('DateInput', () => {
    it('title', () => {
        render(<DateInput title='title' />)
        expect(screen.getByText(/title/i)).toBeInTheDocument();
        expect(screen.queryByText(/null text/i)).not.toBeInTheDocument();
    })

    it('error text', () => {
        render(<DateInput title='title' error={true} />)
        expect(screen.getByText('Title is a required field')).toBeInTheDocument();
    })

    it('render date picker', () => {
        render(<DateInput/>)
        expect(screen.getByTestId('datePicker')).toBeInTheDocument()
    })
})
