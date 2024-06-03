import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import { FormStep5 } from '@/app/containers/steps/step5'

const defaultValues = {
  notifications: false,
  aboutService: 'socialMedia',
  terms: true,
}

describe('FormStep5', () => {
  it('should render the FormStep5 component', () => {
    const { getByLabelText, getByText } = render(<FormStep5 onSubmit={ () => {} } />)
    expect(getByLabelText('Would you like to receive notifications via email?')).toBeInTheDocument()
    expect(getByText('How did you hear about our service?')).toBeInTheDocument()
    expect(getByLabelText('I agree to the terms and conditions')).toBeInTheDocument()
  })

  it('should submit the form when the "Next" button is clicked', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormStep5 onSubmit={ onSubmit } values={ defaultValues } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })

  it('should cancel the form when the "Back" button is clicked', async () => {
    const onCancel = jest.fn()
    const { getByText } = render(<FormStep5 onCancel={ onCancel } onSubmit={ () => {} } />)
    fireEvent.click(getByText('Back'))
    await waitFor(() => expect(onCancel).toHaveBeenCalled())
  })

  it('should show required error messages when fields are empty', async () => {
    const { getByText } = render(<FormStep5 onSubmit={ () => {} } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Must select an option')).toBeInTheDocument()
      expect(getByText('Terms and conditions must be accepted')).toBeInTheDocument()
    })
  })

  it('should display loading spinner when submitting the form', async () => {
    const onSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 1000)))
    const { getByText } = render(<FormStep5 onSubmit={ onSubmit } values={ defaultValues } />)
    const button = getByText('Next')
    fireEvent.click(button)
    await waitFor(() => expect(button).toBeDisabled())
    await waitFor(() => expect(button).not.toBeDisabled())
  })

  it('should select radio option correctly', () => {
    const { getByLabelText } = render(<FormStep5 onSubmit={ () => {} } />)
    fireEvent.click(getByLabelText('Online Ads'))
    expect(getByLabelText('Online Ads')).toBeChecked()
  })

  it('should select checkbox option correctly', () => {
    const { getByLabelText } = render(<FormStep5 onSubmit={ () => {} } />)
    fireEvent.click(getByLabelText('Would you like to receive notifications via email?'))
    expect(getByLabelText('Would you like to receive notifications via email?')).toBeChecked()
  })
})
