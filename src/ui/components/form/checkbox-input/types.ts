import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

/**
 * Represents the properties for the CheckboxInput component.
 */
export interface CheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional helper text to provide additional information about the input.
   */
  helperText?: string

  /**
   * The label for the checkbox.
   */
  label: string

  /**
   * A string mask for formatting the input value.
   */
  mask?: string

  /**
   * The name of the input field.
   */
  name: string

  /**
   * An error object representing validation errors for the input field.
   */
  error?: FieldError
}
