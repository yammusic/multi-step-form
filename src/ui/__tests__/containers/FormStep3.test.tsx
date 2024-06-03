import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import { FormStep3 } from '@/app/containers/steps/step3'

const defaultValues = {
  username: 'jane123',
  password: '$Hello09',
  repeatPassword: '$Hello09',
  profileType: 'personal',
}

describe('FormStep3', () => {
  it('should render the FormStep3 component', () => {
    const { getByLabelText, getByText } = render(<FormStep3 onSubmit={ () => {} } />)
    expect(getByLabelText('Username *')).toBeInTheDocument()
    expect(getByLabelText('Password *')).toBeInTheDocument()
    expect(getByLabelText('Repeat password *')).toBeInTheDocument()
    expect(getByText('Profile type *')).toBeInTheDocument()
  })

  it('should submit the form when the "Next" button is clicked', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormStep3 onSubmit={ onSubmit } values={ defaultValues } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })

  it('should cancel the form when the "Back" button is clicked', async () => {
    const onCancel = jest.fn()
    const { getByText } = render(<FormStep3 onCancel={ onCancel } onSubmit={ () => {} } />)
    fireEvent.click(getByText('Back'))
    await waitFor(() => expect(onCancel).toHaveBeenCalled())
  })

  it('should show required error messages when fields are empty', async () => {
    const { getByText } = render(<FormStep3 onSubmit={ () => {} } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Username is required')).toBeInTheDocument()
      expect(getByText('Password is required')).toBeInTheDocument()
      expect(getByText('Repeat password is required')).toBeInTheDocument()
      expect(getByText('Profile type is required')).toBeInTheDocument()
    })
  })

  it('should show password error messages when password does not meet criteria', async () => {
    const { getByLabelText, getByText } = render(<FormStep3 onSubmit={ () => {} } />)
    fireEvent.change(getByLabelText('Password *'), { target: { value: 'weak' } })
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Password must be at least 8 characters')).toBeInTheDocument()
    })
  })

  it('should show error message when repeat password does not match password', async () => {
    const { getByLabelText, getByText } = render(<FormStep3 onSubmit={ () => {} } />)
    fireEvent.change(getByLabelText('Password *'), { target: { value: 'Password123!' } })
    fireEvent.change(getByLabelText('Repeat password *'), { target: { value: 'Mismatch' } })
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Passwords do not match')).toBeInTheDocument()
    })
  })

  it('should show error message when profile type is not selected', async () => {
    const { getByText } = render(<FormStep3 onSubmit={ () => {} } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Profile type is required')).toBeInTheDocument()
    })
  })

  it('should display default values in input fields if provided', () => {
    const { getByLabelText } = render(<FormStep3 onSubmit={ () => {} } values={ defaultValues } />)
    expect(getByLabelText('Username *')).toHaveValue('jane123')
    expect(getByLabelText('Password *')).toHaveValue('$Hello09')
    expect(getByLabelText('Repeat password *')).toHaveValue('$Hello09')
  })
})
