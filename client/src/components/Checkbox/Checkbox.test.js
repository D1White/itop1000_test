import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('checked', () => {
    const setChecked = jest.fn()

    const { container, getByRole } = render(<Checkbox checked={false} setChecked={setChecked} />)
    const checkbox = getByRole('checkbox')
    const label = container.firstChild
    expect(checkbox.checked).toEqual(false)
    userEvent.click(label)
    expect(setChecked).toHaveBeenCalledTimes(1)
  })

  it('text', () => {
    render(<Checkbox text="test text" />)
    expect(screen.getByText(/test text/i)).toBeInTheDocument()
    expect(screen.queryByText(/null text/i)).not.toBeInTheDocument()
  })
})
