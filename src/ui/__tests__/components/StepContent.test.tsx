import React from 'react'
import { render } from '@testing-library/react'
import { StepContent } from '@/app/components/step-content'

describe('StepContent', () => {
  it('should render the StepContent component with props', () => {
    const { getByText } = render(
      <StepContent
        description="Enter your contact information"
        title="Step 2"
      >
        <input type="text" />
      </StepContent>
    )
    expect(getByText('Step 2')).toBeInTheDocument()
    expect(getByText('Enter your contact information')).toBeInTheDocument()
    expect(document.querySelector('input[type="text"]')).toBeInTheDocument()
  })
})
