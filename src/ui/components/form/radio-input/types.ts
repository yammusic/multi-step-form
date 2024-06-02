import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

/**
 * Props for the RadioInput component.
 */
export interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional helper text to display below the input.
   */
  helperText?: string

  /**
   * The label for the input.
   */
  label: string

  /**
   * The mask for the input.
   */
  mask?: string

  /**
   * The name of the input.
   */
  name: string

  /**
   * Any error associated with the input.
   */
  error?: FieldError
}
