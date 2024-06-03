import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { TextInput } from '@/app/components/form/text-input'
import type { TextInputProps } from '@/app/components/form/text-input'

// Datos de ejemplo para las pruebas
const exampleProps: TextInputProps = {
  label: 'Username',
  name: 'username',
  helperText: 'Enter your username',
  onChange: jest.fn(),
  value: '',
  error: { message: 'Username is required', type: 'required' },
  required: true,
}

describe('TextInput', () => {
  it('renders the input and label correctly', () => {
    render(<TextInput { ...exampleProps } />)
    expect(screen.getByLabelText('Username *')).toBeInTheDocument()
  })

  it('renders with the correct styles when there is no error', () => {
    const { container } = render(<TextInput { ...exampleProps } error={ undefined } />)
    const input = container.querySelector('input')
    expect(input).toHaveClass('ring-gray-300')
    expect(input).not.toHaveClass('ring-red-500')
  })

  it('renders with the correct styles when there is an error', () => {
    render(<TextInput { ...exampleProps } />)
    const input = screen.getByLabelText('Username *')
    expect(input).toHaveClass('ring-red-500')
  })

  it('displays the helper text when provided', () => {
    render(<TextInput { ...exampleProps } />)
    const helperText = screen.getByText('Enter your username')
    expect(helperText).toBeInTheDocument()
  })

  it('displays the error message when there is an error', () => {
    render(<TextInput { ...exampleProps } />)
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  it('calls the onChange handler when the input value changes', () => {
    render(<TextInput { ...exampleProps } />)
    const input = screen.getByLabelText('Username *')
    fireEvent.change(input, { target: { value: 'JohnDoe' } })
    expect(exampleProps.onChange).toHaveBeenCalled()
  })
})
