'use client'

import React, { useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'

import { SelectInput, TextInput } from '@/app/components'
import type { FormStep4BFields, FormStep4BProps } from './types'

export function FormStep4B(props: Readonly<FormStep4BProps>) {
  const { onSubmit, onCancel, values } = props
  const { handleSubmit, formState: { errors }, control } = useForm<FormStep4BFields>({
    defaultValues: {
      companyName: '',
      companySize: '1-10',
      companyRole: '',
    },
    values: values || undefined,
  })

  const onSubmitHandler: SubmitHandler<FormStep4BFields> = useCallback((data) => {
    onSubmit(data)
  }, [onSubmit])

  const onCancelHandler = useCallback(() => {
    onCancel?.()
  }, [onCancel])

  return (
    <form noValidate className="space-y-8" onSubmit={ handleSubmit(onSubmitHandler) }>
      <Controller
        control={ control }
        name="companyName"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.companyName }
            helperText="For example, Google"
            label="Company name"
            toggleIcon={ () => null }
            { ...field as any }
          />
        ) }
        rules={ {
          required: 'Company name is required',
        } }
      />

      <Controller
        control={ control }
        name="companySize"
        render={ ({ field }) => (
          <SelectInput
            required
            error={ errors?.companySize }
            label="Company size"
            options={ [
              { label: '1-10', value: '1-10' },
              { label: '11-50', value: '11-50' },
              { label: '51-200', value: '51-200' },
              { label: '201-500', value: '201-500' },
              { label: '500+', value: '500+' },
            ] }
            { ...field }
          />
        ) }
        rules={ {
          required: 'Company size is required',
        } }
      />

      <Controller
        control={ control }
        name="companyRole"
        render={ ({ field }) => (
          <TextInput
            required
            error={ errors?.companyRole }
            helperText="For example, Software Engineer"
            label="Company role"
            { ...field }
          />
        ) }
        rules={ {
          required: 'Company role is required',
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
