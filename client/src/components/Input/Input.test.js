import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Input from './Input'

describe('Input', () => {
  it('title', () => {
    render(<Input title="title" />)
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.queryByText(/null text/i)).not.toBeInTheDocument()
  })

  it('error text', () => {
    render(<Input title="title" error />)
    expect(screen.getByText('Title is a required field')).toBeInTheDocument()
  })

  it('input change', () => {
    const setValue = jest.fn()
    render(<Input title="title" setValue={setValue} />)

    expect(screen.getByRole('textbox')).toHaveValue('')
    userEvent.type(screen.getByRole('textbox'), 'value')
    expect(setValue).toHaveBeenCalledTimes(5)
  })
})
