import React from 'react'
import type { RadioInputProps } from './types'

/**
 * A radio input component.
 *
 * @param props - The props for the RadioInput component.
 * @returns A React JSX element representing the RadioInput.
 *
 * @example
 * <RadioInput
 *   label="Option 1"
 *   name="option"
 *   value="option1"
 *   onChange={handleChange}
 * />
 */
export function RadioInput(props: Readonly<RadioInputProps>) {
  const { label, name, error, ...rest } = props
  const hasError = typeof error?.message === 'string'

  const styles = `h-4 w-4 text-indigo-600 focus:ring-indigo-600 ${ hasError ? 'ring-red-500' : 'border-gray-300' }`

  return (
    <div className="flex items-center gap-x-3">
      <input
        className={ styles }
        id={ name }
        name={ name }
        type="radio"
        { ...rest }
      />

      <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={ rest.id }>
        { label }
      </label>
    </div>
  )
}
