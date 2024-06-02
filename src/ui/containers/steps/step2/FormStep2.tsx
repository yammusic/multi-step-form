'use client'

import React, { useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'

import { TextInput } from '@/app/components/form'
import { REGEX_POSTAL_CODE } from '@/domain/constants'
import type { FormStep2Fields, FormStep2Props } from './types'

/**
 * Component for rendering Step 2 of a multi-step form.
 *
 * @param props - The props for the Step 2 form component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <FormStep2
 *   onSubmit={(data) => console.log(data)}
 *   onCancel={() => console.log('Cancelled')}
 *   values={{ address: '123 Main St', city: 'Anytown', postalCode: '12345', country: 'USA' }}
 * />
 * ```
 */
export function FormStep2(props: Readonly<FormStep2Props>) {
  const { onSubmit, onCancel, values } = props
  const { handleSubmit, formState: { errors }, control } = useForm<FormStep2Fields>({
    defaultValues: {
      address: '',
      city: '',
      postalCode: '',
      country: '',
    },
    values: values || undefined,
  })

  const onSubmitHandler: SubmitHandler<FormStep2Fields> = useCallback((data) => {
    onSubmit(data)
  }, [onSubmit])

  const onCancelHandler = useCallback(() => {
    onCancel?.()
  }, [onCancel])

  return (
    <form noValidate className="space-y-8" onSubmit={ handleSubmit(onSubmitHandler) }>
      <Controller
        control={ control }
        name="address"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.address }
            helperText="For example, 123 Main St"
            label="Address"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Address is required',
        } }
      />

      <Controller
        control={ control }
        name="city"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.city }
            helperText="For example, Anytown"
            label="City"
            { ...field }
          />
        ) }
        rules={ {
          required: 'City is required',
        } }
      />

      <Controller
        control={ control }
        name="postalCode"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.postalCode }
            helperText="For example, 123456"
            label="Postal code"
            mask="999999"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Postal code is required',
          pattern: {
            value: REGEX_POSTAL_CODE,
            message: 'Invalid postal code"',
          },
        } }
      />

      <Controller
        control={ control }
        name="country"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.country }
            helperText="For example, USA"
            label="Country"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Country is required',
        } }
      />

      <div className="mt-6 flex items-center justify-end gap-x-6 pt-6">
        <button
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={ onCancelHandler }
          type="button"
        >
          Back
        </button>

        <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  )
}
