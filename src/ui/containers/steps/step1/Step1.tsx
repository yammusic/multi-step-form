'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components/step-content'
import { useAppActions, useAppState } from '@/domain/store/features/app/hooks'

import { FormStep1 } from './FormStep1'
import type { FormStep1Fields, Step1Props } from './types'

/**
 * Component for rendering Step 1 of a multi-step form.
 *
 * @param props - The props for the Step 1 component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <Step1 onNext={(data) => console.log(data)} />
 * ```
 */
export function Step1(props: Readonly<Step1Props>) {
  const { onNext } = props
  const { step1Data } = useAppState()
  const { setStep1Data } = useAppActions()

  const onSubmit = useCallback((data: FormStep1Fields) => {
    setStep1Data(data)
    onNext(data)
  }, [onNext])

  return (
    <StepContent description="Enter your personal information" title="Step 1">
      <FormStep1 onSubmit={ onSubmit } values={ step1Data } />
    </StepContent>
  )
}
