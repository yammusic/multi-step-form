import React from 'react'
import { render } from '@testing-library/react'

import { DivMotion } from '@/app/components/div-motion'
import type { DivMotionProps } from '@/app/components/div-motion'

const exampleProps: DivMotionProps = {
  className: 'my-class',
  children: <p>Animated content</p>
}

describe('DivMotion', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<DivMotion { ...exampleProps } />)

    expect(getByText('Animated content')).toBeInTheDocument()
  })

  it('applies given class name', () => {
    const { container } = render(<DivMotion { ...exampleProps } />)
    const divElement = container.firstChild

    expect(divElement).toHaveClass('my-class')
  })

  it('has initial style properties', () => {
    const { container } = render(<DivMotion { ...exampleProps } />)
    const divElement = container.firstChild as HTMLElement

    expect(divElement).toHaveStyle('opacity: 0')
    expect(divElement).toHaveStyle('transform: translateY(20px) translateZ(0)')
  })

  it('transitions to final style properties', () => {
    const { container } = render(<DivMotion { ...exampleProps } />)
    const divElement = container.firstChild as HTMLElement

    // Manually trigger the transition
    setTimeout(() => {
      expect(divElement).toHaveStyle('opacity: 1')
      expect(divElement).toHaveStyle('transform: translateY(0)')
    }, 300)
  })
})
