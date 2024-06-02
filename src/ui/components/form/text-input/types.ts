import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'


/**
 * Props for the TextInput component.
 */
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Helper text to display below the input.
   */
  helperText?: string

  /**
   * Label for the input.
   */
  label: string

  /**
   * Mask for the input.
   */
  mask?: string

  /**
   * Name of the input.
   */
  name: string

  /**
   * Error state for the input.
   */
  error?: FieldError

  /**
   * Determines if the input is required.
   */
  required?: boolean
}
