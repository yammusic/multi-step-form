'use client'

import React, { useCallback } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm, useWatch } from 'react-hook-form'

import { CheckboxInput, RadioInput } from '@/app/components'
import type { FormStep5Fields, FormStep5Props } from './types'

/**
 * Component for rendering Step 5 of a multi-step form.
 *
 * @param props - The props for the Step 5 form component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <FormStep5
 *   onSubmit={(data) => console.log(data)}
 *   onCancel={() => console.log('Cancel')}
 *   values={{ notifications: false, aboutService: 'Social media', terms: true }}
 * />
 * ```
 */
export function FormStep5(props: Readonly<FormStep5Props>) {
  const { onSubmit, onCancel, values } = props
  const { handleSubmit, formState: { errors }, control } = useForm<FormStep5Fields>({
    defaultValues: {
      notifications: false,
      aboutService: '',
      terms: false,
    },
    values: values || undefined,
  })
  const notifications = useWatch({ control, name: 'notifications', defaultValue: values?.notifications })
  const aboutService = useWatch({ control, name: 'aboutService' }) || values?.aboutService
  const terms = useWatch({ control, name: 'terms', defaultValue: values?.terms })

  const onSubmitHandler: SubmitHandler<FormStep5Fields> = useCallback((data) => {
    onSubmit(data)
  }, [onSubmit])

  const onCancelHandler = useCallback(() => {
    onCancel?.()
  }, [onCancel])

  return (
    <form noValidate className="space-y-8" onSubmit={ handleSubmit(onSubmitHandler) }>
      <Controller
        control={ control }
        name="notifications"
        render={ ({ field }) => (
          <CheckboxInput
            checked={ notifications }
            error={ errors?.notifications }
            label="Would you like to receive notifications via email?"
            { ...field as any }
          />
        ) }
      />

      <div>
        <h6 className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          How did you hear about our service?
        </h6>

        <Controller
          control={ control }
          name="aboutService"
          render={ ({ field }) => (
            <div className="grid grid-cols-3 gap-y-4">
              <RadioInput
                checked={ aboutService === 'onlineAds' }
                error={ errors?.aboutService }
                id="onlineAds"
                label="Online Ads"
                { ...field }
                value={ 'onlineAds' }
              />

              <RadioInput
                checked={ aboutService === 'friendReferral' }
                error={ errors?.aboutService }
                id="friendReferral"
                label="Friend Referral"
                { ...field }
                value={ 'friendReferral' }
              />

              <RadioInput
                checked={ aboutService === 'socialMedia' }
                error={ errors?.aboutService }
                id="socialMedia"
                label="Social Media"
                { ...field }
                value={ 'socialMedia' }
              />

              <RadioInput
                checked={ aboutService === 'other' }
                error={ errors?.aboutService }
                id="other"
                label="Other"
                { ...field }
                value={ 'other' }
              />
            </div>
          ) }
          rules={ {
            required: 'Must select an option',
          } }
        />

        { !!errors?.aboutService && (
        <p className="ml-2 text-xs text-red-500">{ errors?.aboutService?.message }</p>
        ) }
      </div>

      <Controller
        control={ control }
        name="terms"
        render={ ({ field }) => (
          <CheckboxInput
            required
            checked={ terms }
            error={ errors?.terms }
            label="I agree to the terms and conditions"
            { ...field as any }
          />
        ) }
        rules={ {
          required: 'Terms and conditions must be accepted',
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
