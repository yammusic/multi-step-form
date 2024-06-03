'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components/step-content'
import { useAppActions, useAppState } from '@/domain/store/features/app/hooks'

import { FormStep4B } from './FormStep4B'
import type { FormStep4BFields, Step4BProps } from './types'

/**
 * Component for rendering Step 4 (Business) of a multi-step form.
 *
 * @param props - The props for the Step 4 (Business) component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <Step4B
 *  onNext={(data) => console.log(data)}
 *  onPrev={() => console.log('Back to previous step')}
 * />
 * ```
 */
export function Step4B(props: Readonly<Step4BProps>) {
  const { onNext, onPrev } = props
  const { step4BData } = useAppState()
  const { setStep4BData } = useAppActions()

  const onSubmit = useCallback((data: FormStep4BFields) => {
    setStep4BData(data)
    onNext(data)
  }, [onNext])

  const onBack = useCallback(() => {
    onPrev()
  }, [onPrev])

  return (
    <StepContent description="Enter your business details" title="Step 4B">
      <FormStep4B onCancel={ onBack } onSubmit={ onSubmit } values={ step4BData } />
    </StepContent>
  )
}
