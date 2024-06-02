import React from 'react'
import type { TextInputProps } from './types'
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask'

export function TextInput(props: Readonly<TextInputProps>) {
  const { label, mask, name, helperText, error, required, ...rest } = props
  const hasError = typeof error?.message === 'string'

  let maskGenerator
  if (mask) { maskGenerator = createDefaultMaskGenerator(mask) }

  const styles = `block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${ hasError ? 'ring-red-500' : 'ring-gray-300' }`

  return (
    <div className="sm:col-span-3">
      <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={ name }>
        { `${label}${ required ? ' *' : ''}` }
      </label>

      <div className="mt-2">
        { !!mask && (
          <MaskedInput
            className={ styles }
            id={ name }
            maskGenerator={ maskGenerator }
            name={ name }
            type="text"
            { ...rest }
            onChange={ rest.onChange as any }
            value={ rest.value as any }
          />
        ) }

        { !mask && (
          <input
            className={ styles }
            id={ name }
            name={ name }
            type="text"
            { ...rest }
          />
        ) }

        { !!helperText && <p className="ml-2 text-xs text-gray-500">{ helperText }</p>}

        { !!hasError && <p className="ml-2 text-xs text-red-500">{ error.message }</p>}
      </div>
    </div>
  )
}
