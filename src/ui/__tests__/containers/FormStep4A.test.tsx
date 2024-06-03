import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import { FormStep4A } from '@/app/containers/steps/step4A'

const defaultValues = {
  dateOfBirth: '1990-01-01',
  gender: 'male',
}

describe('FormStep4A', () => {
  it('should render the FormStep4A component', () => {
    const { getByLabelText } = render(<FormStep4A onSubmit={ () => {} } />)
    expect(getByLabelText('Date of birth *')).toBeInTheDocument()
    expect(getByLabelText('Gender *')).toBeInTheDocument()
  })

  it('should submit the form when the "Next" button is clicked', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormStep4A onSubmit={ onSubmit } values={ defaultValues } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })

  it('should cancel the form when the "Back" button is clicked', async () => {
    const onCancel = jest.fn()
    const { getByText } = render(<FormStep4A onCancel={ onCancel } onSubmit={ () => {} } />)
    fireEvent.click(getByText('Back'))
    await waitFor(() => expect(onCancel).toHaveBeenCalled())
  })

  it('should show required error messages when fields are empty', async () => {
    const { getByText } = render(<FormStep4A onSubmit={ () => {} } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Date of birth is required')).toBeInTheDocument()
      // expect(getByText('Gender is required')).toBeInTheDocument()
    })
  })

  it('should show error message when date of birth is in the future', async () => {
    const { getByLabelText, getByText } = render(<FormStep4A onSubmit={ () => {} } />)
    fireEvent.change(getByLabelText('Date of birth *'), { target: { value: '2050-01-01' } })
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Date of birth must be in the past')).toBeInTheDocument()
    })
  })

  it('should display default values in input fields if provided', () => {
    const { getByLabelText } = render(<FormStep4A onSubmit={ () => {} } values={ defaultValues } />)
    // expect(getByLabelText('Date of birth *')).toHaveValue('1990-01-01')
    expect(getByLabelText('Gender *')).toHaveValue('male')
  })
})
