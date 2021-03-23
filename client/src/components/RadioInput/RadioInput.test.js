import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import RadioInput from './RadioInput'

const radioValues = ['value-1', 'value-2']

describe('RadioInput', () => {
  it('render inputs', () => {
    render(<RadioInput values={radioValues} />)
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  it('error text', () => {
    render(<RadioInput title="title" error values={[]} />)
    expect(screen.getByText('Title is a required field')).toBeInTheDocument()
  })

  it('radio change', () => {
    const setValue = jest.fn()
    render(<RadioInput values={radioValues} setValue={setValue} />)

    userEvent.click(screen.getByText('value-1'))
    expect(setValue).toHaveBeenCalledTimes(1)
  })
})
