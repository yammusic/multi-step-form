import type { FieldError } from 'react-hook-form'
import type { DatepickerType } from 'react-tailwindcss-datepicker'

/**
 * Props for the DateInput component.
 */
export interface DateInputProps extends DatepickerType {
  /**
   * Helper text to display below the input.
   */
  helperText?: string

  /**
   * The label for the input.
   */
  label: string

  /**
   * The name of the input field.
   */
  name: string

  /**
   * Any error associated with the input field.
   */
  error?: FieldError

  /**
   * Indicates whether the input is required.
   */
  required?: boolean
}
