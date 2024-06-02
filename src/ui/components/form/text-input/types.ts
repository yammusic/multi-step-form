import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string
  label: string
  mask?: string
  name: string
  error?: FieldError
  required?: boolean
}
