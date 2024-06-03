import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { SelectInput } from '@/app/components/form/select-input'
import type { SelectInputProps } from '@/app/components/form/select-input'

const exampleProps: SelectInputProps = {
  label: 'Country',
  name: 'country',
  options: [
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'UK', value: 'uk' },
  ],
  helperText: 'Please select your country',
  error: { message: 'Country is required', type: 'required' },
  required: true,
  onChange: jest.fn(),
}

describe('SelectInput', () => {
  it('renders the select input and label correctly', () => {
    render(<SelectInput { ...exampleProps } />)
    expect(screen.getByLabelText('Country *')).toBeInTheDocument()
  })

  it('renders with the correct styles when there is no error', () => {
    const { container } = render(<SelectInput { ...exampleProps } error={ undefined } />)
    const select = container.querySelector('select')
    expect(select).toHaveClass('ring-gray-300')
    expect(select).not.toHaveClass('ring-red-500')
  })

  it('renders with the correct styles when there is an error', () => {
    render(<SelectInput { ...exampleProps } />)
    const select = screen.getByLabelText('Country *')
    expect(select).toHaveClass('ring-red-500')
  })

  it('displays the helper text when provided', () => {
    render(<SelectInput { ...exampleProps } />)
    expect(screen.getByText('Please select your country')).toBeInTheDocument()
  })

  it('displays the error message when there is an error', () => {
    render(<SelectInput { ...exampleProps } />)
    expect(screen.getByText('Country is required')).toBeInTheDocument()
  })

  it('calls the onChange handler when an option is selected', () => {
    render(<SelectInput { ...exampleProps } />)
    const select = screen.getByLabelText('Country *')
    fireEvent.change(select, { target: { value: 'canada' } })
    expect(exampleProps.onChange).toHaveBeenCalled()
  })

  it('renders all options correctly', () => {
    render(<SelectInput { ...exampleProps } />)
    exampleProps.options.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument()
    })
  })
})
