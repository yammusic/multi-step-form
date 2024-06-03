import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { RadioInput } from '@/app/components/form/radio-input'
import type { RadioInputProps } from '@/app/components/form/radio-input'

const exampleProps: RadioInputProps = {
  label: 'Option 1',
  name: 'option',
  value: 'option1',
  onChange: jest.fn(),
  error: { message: 'Error message', type: 'custom' },
}

describe('RadioInput', () => {
  it('renders the radio input and label correctly', () => {
    render(<RadioInput { ...exampleProps } />)
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument()
  })

  it('renders with the correct styles when there is no error', () => {
    const { container } = render(<RadioInput { ...exampleProps } error={ undefined } />)
    const input = container.querySelector('input')
    expect(input).toHaveClass('border-gray-300')
    expect(input).not.toHaveClass('ring-red-500')
  })

  it('renders with the correct styles when there is an error', () => {
    render(<RadioInput { ...exampleProps } />)
    const input = screen.getByLabelText('Option 1')
    expect(input).toHaveClass('ring-red-500')
  })

  it('calls the onChange handler when clicked', () => {
    render(<RadioInput { ...exampleProps } />)
    const input = screen.getByLabelText('Option 1')
    fireEvent.click(input)
    expect(exampleProps.onChange).toHaveBeenCalled()
  })

  it('associates the input with the correct label', () => {
    render(<RadioInput { ...exampleProps } />)
    const input = screen.getByLabelText('Option 1')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'option')
  })
})
