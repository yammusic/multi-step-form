import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import { FormStep4B } from '@/app/containers/steps/step4B'

const defaultValues = {
  companyName: 'Google',
  companySize: '1-10',
  companyRole: 'Engineer',
}

describe('FormStep4B', () => {
  it('should render the FormStep4B component', () => {
    const { getByLabelText } = render(<FormStep4B onSubmit={ () => {} } />)
    expect(getByLabelText('Company name *')).toBeInTheDocument()
    expect(getByLabelText('Company size *')).toBeInTheDocument()
    expect(getByLabelText('Company role *')).toBeInTheDocument()
  })

  it('should submit the form when the "Next" button is clicked', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormStep4B onSubmit={ onSubmit } values={ defaultValues } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })

  it('should cancel the form when the "Back" button is clicked', async () => {
    const onCancel = jest.fn()
    const { getByText } = render(<FormStep4B onCancel={ onCancel } onSubmit={ () => {} } />)
    fireEvent.click(getByText('Back'))
    await waitFor(() => expect(onCancel).toHaveBeenCalled())
  })

  it('should show required error messages when fields are empty', async () => {
    const { getByText } = render(<FormStep4B onSubmit={ () => {} } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Company name is required')).toBeInTheDocument()
      expect(getByText('Company role is required')).toBeInTheDocument()
    })
  })

  it('should display default values in input fields if provided', () => {
    const { getByLabelText } = render(<FormStep4B onSubmit={ () => {} } values={ defaultValues } />)
    expect(getByLabelText('Company name *')).toHaveValue('Google')
    expect(getByLabelText('Company size *')).toHaveValue('1-10')
    expect(getByLabelText('Company role *')).toHaveValue('Engineer')
  })
})
