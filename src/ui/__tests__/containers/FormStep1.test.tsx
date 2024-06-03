import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { FormStep1 } from '@/app/containers/steps/step1'

const exampleData = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '(555) 555-5555',
}

describe('FormStep1', () => {
  it('should render the FormStep1 component', () => {
    const { getByLabelText } = render(<FormStep1 onSubmit={ () => {} } />)
    expect(getByLabelText('Full name *')).toBeInTheDocument()
    expect(getByLabelText('Email address *')).toBeInTheDocument()
    expect(getByLabelText('Phone number *')).toBeInTheDocument()
  })

  it('should submit the form when the "Next" button is clicked', async () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<FormStep1 onSubmit={ onSubmit } values={ exampleData } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })

  it('should show required error messages when fields are empty', async () => {
    const { getByText } = render(<FormStep1 onSubmit={ () => {} } />)
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Full name is required')).toBeInTheDocument()
      expect(getByText('Email is required')).toBeInTheDocument()
      expect(getByText('Phone number is required')).toBeInTheDocument()
    })
  })

  it('should show pattern error messages when fields have invalid values', async () => {
    const { getByLabelText, getByText } = render(<FormStep1 onSubmit={ () => {} } />)
    fireEvent.change(getByLabelText('Full name *'), { target: { value: 'John' } })
    fireEvent.change(getByLabelText('Email address *'), { target: { value: 'invalidemail' } })
    fireEvent.change(getByLabelText('Phone number *'), { target: { value: '123' } })
    fireEvent.click(getByText('Next'))
    await waitFor(() => {
      expect(getByText('Must be two words or more')).toBeInTheDocument()
      expect(getByText('Invalid email address')).toBeInTheDocument()
      expect(getByText('Invalid phone number')).toBeInTheDocument()
    })
  })

  it('should display default values in input fields if provided', () => {
    const defaultValues = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '(555) 555-5555',
    }
    const { getByLabelText } = render(<FormStep1 onSubmit={ () => {} } values={ defaultValues } />)
    expect(getByLabelText('Full name *')).toHaveValue('John Doe')
    expect(getByLabelText('Email address *')).toHaveValue('john@example.com')
    expect(getByLabelText('Phone number *')).toHaveValue('(555) 555-5555')
  })
})
