import React from 'react'

import type { SpinnerProps } from './types'

/**
 * A React functional component that renders a spinning indicator.
 *
 * @param {Readonly<SpinnerProps>} props - The properties for the Spinner component.
 * @returns {JSX.Element} A spinning indicator element.
 *
 * @example
 * ```tsx
 * <Spinner color="blue" />
 * ```
 */
export function Spinner(props: Readonly<SpinnerProps>) {
  const {
    color = 'gray',
    size = 20
  } = props

  return (
    <div className={ `border-${color}-300 h-${size} w-${size} animate-spin rounded-full border-8 border-t-blue-600` } />
  )
}
