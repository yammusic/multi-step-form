import React from 'react'
import type { CheckboxInputProps } from './types'

/**
 * Renders a checkbox input component.
 *
 * @param props - The props for the CheckboxInput component.
 * @returns A CheckboxInput component.
 *
 * @example
 * <CheckboxInput
 *   label="Remember me"
 *   name="remember"
 *   checked={isChecked}
 *   onChange={handleChange}
 *   error={errors.remember}
 * />
 */
export function CheckboxInput(props: Readonly<CheckboxInputProps>) {
  const { label, name, error, ...rest } = props
  const hasError = typeof error?.message === 'string'

  const styles = `h-4 w-4 rounded text-indigo-600 focus:ring-indigo-600 ${ hasError ? 'ring-red-500' : 'border-gray-300' }`

  return (
    <div className="flex flex-col gap-x-3">
      <div className="flex items-center gap-x-3">
        <input
          aria-invalid={ hasError }
          className={ styles }
          id={ name }
          name={ name }
          type="checkbox"
          { ...rest }
        />

        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={ name }>
          { label }
        </label>

      </div>

      { !!hasError && (
        <p
          className="ml-2 text-xs text-red-500"
          id={ `${name}-error` }
        >
          { error.message }
        </p>
      ) }
    </div>
  )
}
