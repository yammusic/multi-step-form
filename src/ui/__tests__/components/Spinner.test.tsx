import React from 'react'
import { render } from '@testing-library/react'
import { Spinner } from '@/app/components/spinner'

describe('Spinner', () => {
  it('should render the Spinner component without props', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the Spinner component with custom color', () => {
    const { container } = render(<Spinner color="blue" />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
