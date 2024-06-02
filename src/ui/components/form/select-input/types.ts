import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

/**
 * Props for the SelectInput component.
 */
export interface SelectInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  /**
   * Optional helper text to display below the input.
   */
  helperText?: string

  /**
   * Label for the select input.
   */
  label: string
  /**
   * Name of the select input.
   */
  name: string

  /**
   * Error object for the select input.
   */
  error?: FieldError

  /**
   * Specifies whether the select input is required.
   */
  required?: boolean

  /**
   * Options for the select input.
   */
  options: { label: string; value: string }[]
}
