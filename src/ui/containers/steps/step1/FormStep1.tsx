'use client'

import React, { useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'

import { TextInput } from '@/app/components/form/text-input'
import { REGEX_EMAIL, REGEX_PHONE_NUMBER, REGEX_TWO_WORDS_OR_MORE } from '@/domain/constants'
import type { FormStep1Fields, FormStep1Props } from './types'

/**
 * Component for rendering Step 1 of a multi-step form.
 *
 * @param props - The props for the Step 1 form component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <FormStep1
 *   onSubmit={(data) => console.log(data)}
 *   values={{ fullName: 'Jane Smith', email: 'jane@example.com', phoneNumber: '(555) 555-5555' }}
 * />
 * ```
 */
export function FormStep1(props: Readonly<FormStep1Props>) {
  const { onSubmit, values } = props
  const { handleSubmit, formState: { errors }, control } = useForm<FormStep1Fields>({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
    values: values || undefined,
  })

  const onSubmitHandler: SubmitHandler<FormStep1Fields> = useCallback((data) => {
    onSubmit(data)
  }, [onSubmit])

  return (
    <form noValidate className="space-y-8" onSubmit={ handleSubmit(onSubmitHandler) }>
      <Controller
        control={ control }
        name="fullName"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.fullName }
            helperText="For example, Jane Smith"
            label="Full name"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Full name is required',
          pattern: {
            value: REGEX_TWO_WORDS_OR_MORE,
            message: 'Must be two words or more',
          }
        } }
      />

      <Controller
        control={ control }
        name="email"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.email }
            helperText="For example, jane@example.com"
            label="Email address"
            type="email"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Email is required',
          pattern: {
            value: REGEX_EMAIL,
            message: 'Invalid email address',
          },
        } }
      />

      <Controller
        control={ control }
        name="phoneNumber"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.phoneNumber }
            helperText="For example, (555) 555-5555"
            label="Phone number"
            mask="(999) 999-9999"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Phone number is required',
          pattern: {
            value: REGEX_PHONE_NUMBER,
            message: 'Invalid phone number',
          },
        } }
      />

      <div className="mt-6 flex items-center justify-end gap-x-6 pt-6">
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
