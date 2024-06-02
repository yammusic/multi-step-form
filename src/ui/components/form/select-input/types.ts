import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

export interface SelectInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  helperText?: string
  label: string
  name: string
  error?: FieldError
  required?: boolean
  options: { label: string; value: string }[]
}
