// DateInput.test.tsx

import React from 'react'
import { render, screen } from '@testing-library/react'

import { DateInput } from '@/app/components/form/date-input'
import type { DateInputProps } from '@/app/components/form/date-input'

// Datos de ejemplo para las pruebas
const exampleProps: DateInputProps = {
  label: 'Date of Birth',
  name: 'dateOfBirth',
  helperText: 'Please select your date of birth',
  error: { message: 'Invalid date', type: 'custom' },
  required: true,
  maxDate: new Date(),
  onChange: jest.fn(),
  value: '' as any,
}

describe('DateInput', () => {
  it('renders label correctly', () => {
    render(<DateInput { ...exampleProps } />)
    expect(screen.getByLabelText('Date of Birth *')).toBeInTheDocument()
  })

  it('renders helper text correctly', () => {
    render(<DateInput { ...exampleProps } />)
    expect(screen.getByText('Please select your date of birth')).toBeInTheDocument()
  })

  it('renders error message when error is present', () => {
    render(<DateInput { ...exampleProps } />)
    expect(screen.getByText('Invalid date')).toBeInTheDocument()
  })

  it('does not render error message when error is not present', () => {
    const { queryByText } = render(
      <DateInput
        { ...exampleProps }
        error={ undefined }
      />
    )
    expect(queryByText('Invalid date')).not.toBeInTheDocument()
  })

  it('applies the correct styles when error is present', () => {
    render(<DateInput { ...exampleProps } />)
    const input = screen.getByLabelText('Date of Birth *')
    expect(input).toHaveClass('ring-red-500')
  })

  it('applies the correct styles when error is not present', () => {
    const { container } = render(
      <DateInput
        { ...exampleProps }
        error={ undefined }
      />
    )
    const input = container.querySelector('input')
    expect(input).toHaveClass('ring-gray-300')
  })
})
