'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components/step-content'
import { useAppActions, useAppState } from '@/domain/store/features/app/hooks'

import { FormStep2 } from './FormStep2'
import type { FormStep2Fields, Step2Props } from './types'

/**
 * Component for rendering Step 2 of a multi-step form.
 *
 * @param props - The props for the Step 2 component.
 * @returns A React component.
 *
 * @example
 * <Step2
 *  onNext={(data) => console.log(data)}
 *  onPrev={() => console.log('Back to previous step')}
 * />
 */
export function Step2(props: Readonly<Step2Props>) {
  const { onNext, onPrev } = props
  const { step2Data } = useAppState()
  const { setStep2Data } = useAppActions()

  const onSubmit = useCallback((data: FormStep2Fields) => {
    setStep2Data(data)
    onNext(data)
  }, [onNext])

  const onBack = useCallback(() => {
    onPrev()
  }, [onPrev])

  return (
    <StepContent description="Enter your address information" title="Step 2">
      <FormStep2 onCancel={ onBack } onSubmit={ onSubmit } values={ step2Data } />
    </StepContent>
  )
}
