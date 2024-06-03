import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import { FormStep2 } from '@/app/containers/steps/step2'

const defaultValues = {
  address: '123 Main St',
  city: 'Anytown',
  postalCode: '12345',
  country: 'USA',
}

describe('FormStep2', () => {
  it('should render the FormStep2 component', () => {
    const { getByLabelText } = render(<FormStep2 onSubmit={ () => {} } />)
    expect(getByLabelText('Address *')).toBeInTheDocument()
    expect(getByLabelText('City *')).toBeInTheDocument()
    expect(getByLabelText('Postal code *')).toBeInTheDocument()
    expect(getByLabelText('Country *')).toBeInTheDocument()
  })

  it('should submit the form when the "Next" button is clicked', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormStep2 onSubmit={ onSubmit } values={ defaultValues } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })

  it('should cancel the form when the "Back" button is clicked', async () => {
    const onCancel = jest.fn()
    const { getByText } = render(<FormStep2 onCancel={ onCancel } onSubmit={ () => {} } />)
    fireEvent.click(getByText('Back'))
    await waitFor(() => expect(onCancel).toHaveBeenCalled())
  })

  it('should show required error messages when fields are empty', async () => {
    const { getByText } = render(<FormStep2 onSubmit={ () => {} } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Address is required')).toBeInTheDocument()
      expect(getByText('City is required')).toBeInTheDocument()
      expect(getByText('Postal code is required')).toBeInTheDocument()
      expect(getByText('Country is required')).toBeInTheDocument()
    })
  })

  it('should show pattern error message when postal code is invalid', async () => {
    const { getByLabelText, getByText } = render(<FormStep2 onSubmit={ () => {} } />)
    fireEvent.change(getByLabelText('Postal code *'), { target: { value: '123' } })
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Invalid postal code')).toBeInTheDocument()
    })
  })

  it('should display default values in input fields if provided', () => {
    const { getByLabelText } = render(<FormStep2 onSubmit={ () => {} } values={ defaultValues } />)
    expect(getByLabelText('Address *')).toHaveValue('123 Main St')
    expect(getByLabelText('City *')).toHaveValue('Anytown')
    expect(getByLabelText('Postal code *')).toHaveValue('12345')
    expect(getByLabelText('Country *')).toHaveValue('USA')
  })
})
