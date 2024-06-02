'use client'

import React, { useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'

import { DateInput, SelectInput } from '@/app/components'
import type { FormStep4AFields, FormStep4AProps } from './types'

/**
 * Component for rendering Step 4 (Personal) of a multi-step form.
 *
 * @param props - The props for the Step 4 form component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <FormStep4A
 *   onSubmit={(data) => console.log(data)}
 *   onCancel={() => console.log('Cancel')}
 *   values={{ dateOfBirth: '1990-01-01', gender: 'male' }}
 * />
 * ```
 */
export function FormStep4A(props: Readonly<FormStep4AProps>) {
  const { onSubmit, onCancel, values } = props
  const { handleSubmit, formState: { errors }, control } = useForm<FormStep4AFields>({
    defaultValues: {
      dateOfBirth: '',
      gender: 'male',
    },
    values: values || undefined,
  })

  const onSubmitHandler: SubmitHandler<FormStep4AFields> = useCallback((data) => {
    onSubmit(data)
  }, [onSubmit])

  const onCancelHandler = useCallback(() => {
    onCancel?.()
  }, [onCancel])

  return (
    <form noValidate className="space-y-8" onSubmit={ handleSubmit(onSubmitHandler) }>
      <Controller
        control={ control }
        name="dateOfBirth"
        render={ ({ field }) => (
          <DateInput
            asSingle
            required
            error={ errors?.dateOfBirth }
            label="Date of birth"
            toggleIcon={ () => null }
            { ...field as any }
          />
        ) }
        rules={ {
          required: 'Date of birth is required',
          validate: {
            date: ({ startDate }: any) => {
              const date = new Date(startDate)
              if (date > new Date()) {
                return 'Date of birth must be in the past'
              }
            },
          }
        } }
      />

      <Controller
        control={ control }
        name="gender"
        render={ ({ field }) => (
          <SelectInput
            required
            error={ errors?.gender }
            label="Gender"
            options={ [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ] }
            { ...field }
          />
        ) }
        rules={ {
          required: 'Gender is required',
        } }
      />

      <div className="mt-6 flex items-center justify-end gap-x-8 pt-6">
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
