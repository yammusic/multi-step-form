'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components/step-content'
import { useAppActions, useAppState } from '@/domain/store/features/app/hooks'

import { FormStep3 } from './FormStep3'
import type { FormStep3Fields, Step3Props } from './types'

/**
 * Component for rendering Step 3 of a multi-step form.
 *
 * @param props - The props for the Step 3 component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <Step3
 *  onNext={(data) => console.log(data)}
 *  onPrev={() => console.log('Back to previous step')}
 * />
 * ```
 */
export function Step3(props: Readonly<Step3Props>) {
  const { onNext, onPrev } = props
  const { step3Data } = useAppState()
  const { setStep3Data } = useAppActions()

  const onSubmit = useCallback((data: FormStep3Fields) => {
    setStep3Data(data)
    onNext(data)
  }, [onNext])

  const onBack = useCallback(() => {
    onPrev()
  }, [onPrev])

  return (
    <StepContent description="Enter your acount details" title="Step 3">
      <FormStep3 onCancel={ onBack } onSubmit={ onSubmit } values={ step3Data } />
    </StepContent>
  )
}
