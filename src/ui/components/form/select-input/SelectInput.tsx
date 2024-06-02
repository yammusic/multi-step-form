import React from 'react'
import type { SelectInputProps } from './types'

export function SelectInput(props: Readonly<SelectInputProps>) {
  const { label, name, helperText, error, required, options, ...rest } = props
  const hasError = typeof error?.message === 'string'

  const styles = `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${ hasError ? 'ring-red-500' : 'ring-gray-300' }`

  return (
    <div className="sm:col-span-3">
      <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={ name }>
        { `${label}${ required ? ' *' : ''}` }
      </label>

      <div className="mt-2">
        <select
          className={ styles }
          id={ name }
          name={ name }
          { ...rest }
        >
          { options.map(({ label, value }) => (
            <option key={ value } value={ value }>
              { label }
            </option>
          )) }
        </select>

        { !!helperText && <p className="ml-2 text-xs text-gray-500">{ helperText }</p>}

        { !!hasError && <p className="ml-2 text-xs text-red-500">{ error.message }</p>}
      </div>
    </div>
  )
}
