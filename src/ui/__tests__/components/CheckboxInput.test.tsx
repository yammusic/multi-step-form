// CheckboxInput.test.tsx

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { CheckboxInput } from '@/app/components/form/checkbox-input'
import type { CheckboxInputProps } from '@/app/components/form/checkbox-input'

// Datos de ejemplo para las pruebas
const exampleProps: CheckboxInputProps = {
  label: 'Remember me',
  name: 'remember',
  checked: false,
  onChange: jest.fn(),
  error: { message: 'This field is required', type: 'required' },
}

describe('CheckboxInput', () => {
  it('renders label correctly', () => {
    render(<CheckboxInput { ...exampleProps } />)
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument()
  })

  it('renders checkbox input with correct name and type', () => {
    render(<CheckboxInput { ...exampleProps } />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveAttribute('name', 'remember')
    expect(checkbox).toHaveAttribute('type', 'checkbox')
  })

  it('renders error message when error is present', () => {
    render(<CheckboxInput { ...exampleProps } />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not render error message when error is not present', () => {
    const { queryByText } = render(
      <CheckboxInput
        { ...exampleProps }
        error={ undefined }
      />
    )
    expect(queryByText('This field is required')).not.toBeInTheDocument()
  })

  it('calls onChange handler when clicked', () => {
    render(<CheckboxInput { ...exampleProps } />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(exampleProps.onChange).toHaveBeenCalledTimes(1)
  })

  it('applies the correct styles when error is present', () => {
    render(<CheckboxInput { ...exampleProps } />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('ring-red-500')
  })

  it('applies the correct styles when error is not present', () => {
    const { container } = render(
      <CheckboxInput
        { ...exampleProps }
        error={ undefined }
      />
    )
    const checkbox = container.querySelector('input[type="checkbox"]')
    expect(checkbox).toHaveClass('border-gray-300')
  })
})
