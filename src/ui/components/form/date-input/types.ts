import type { FieldError } from 'react-hook-form'
import type { DatepickerType } from 'react-tailwindcss-datepicker'

export interface DateInputProps extends DatepickerType {
  helperText?: string
  label: string
  name: string
  error?: FieldError
  required?: boolean
}
