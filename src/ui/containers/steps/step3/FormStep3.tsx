'use client'

import React, { useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm, useWatch } from 'react-hook-form'

import { RadioInput, TextInput } from '@/app/components'
import { REGEX_STRONG_PASSWORD } from '@/domain/constants'
import type { FormStep3Fields, FormStep3Props } from './types'

/**
 * Component for rendering Step 3 of a multi-step form.
 *
 * @param props - The props for the Step 3 form component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <FormStep3
 *   onSubmit={(data) => console.log(data)}
 *   onCancel={() => console.log('Cancel')}
 *   values={{ username: 'jane123', password: 'password123', repeatPassword: 'password123', profileType: 'personal' }}
 * />
 * ```
 */
export function FormStep3(props: Readonly<FormStep3Props>) {
  const { onSubmit, onCancel, values } = props
  const { handleSubmit, formState: { errors }, control } = useForm<FormStep3Fields>({
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: '',
      profileType: '',
    },
    values: values || undefined,
  })
  const password = useWatch({ control, name: 'password' }) || values?.password
  const profileType = useWatch({ control, name: 'profileType' }) || values?.profileType

  const onSubmitHandler: SubmitHandler<FormStep3Fields> = useCallback((data) => {
    onSubmit(data)
  }, [onSubmit])

  const onCancelHandler = useCallback(() => {
    onCancel?.()
  }, [onCancel])

  return (
    <form noValidate className="space-y-8" onSubmit={ handleSubmit(onSubmitHandler) }>
      <Controller
        control={ control }
        name="username"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.username }
            helperText="For example, jane123"
            label="Username"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Username is required',
        } }
      />

      <Controller
        control={ control }
        name="password"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.password }
            label="Password"
            type="password"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          pattern: {
            value: REGEX_STRONG_PASSWORD,
            message: 'Password must contain at least one uppercase letter, one number, and one special character',
          },
        } }
      />

      <Controller
        control={ control }
        name="repeatPassword"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.repeatPassword }
            helperText="Must match 'Password' field"
            label="Repeat password"
            type="password"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Repeat password is required',
          validate: (value) => value === password || 'Passwords do not match',
        } }
      />

      <div>
        <h6 className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          Profile type *
        </h6>

        <Controller
          control={ control }
          name="profileType"
          render={ ({ field }) => (
            <>
              <RadioInput
                checked={ profileType === 'personal' }
                error={ errors?.profileType }
                helperText="For example, personal or work"
                id="personal"
                label="Personal"
                { ...field }
                value={ 'personal' }
              />

              <RadioInput
                checked={ profileType === 'business' }
                error={ errors?.profileType }
                helperText="For example, personal or work"
                id="business"
                label="Business"
                { ...field }
                value={ 'business' }
              />
            </>
          ) }
          rules={ {
            required: 'Profile type is required',
          } }
        />

        { !!errors?.profileType && (
          <p className="ml-2 text-xs text-red-500">{ errors?.profileType?.message }</p>
        ) }
      </div>

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
