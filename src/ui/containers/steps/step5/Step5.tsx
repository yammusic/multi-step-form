'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components'
import { FormStep5 } from './FormStep5'
import type { FormStep5Fields, Step5Props } from './types'
import { useAppActions, useAppState } from '@/domain/store'

/**
 * Component for rendering Step 5 of a multi-step form.
 *
 * @param props - The props for the Step 5 component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <Step5
 *  onNext={(data) => console.log(data)}
 *  onPrev={() => console.log('Back to previous step')}
 * />
 * ```
 */
export function Step5(props: Readonly<Step5Props>) {
  const { onNext, onPrev } = props
  const { step5Data } = useAppState()
  const { setStep5Data } = useAppActions()

  const onSubmit = useCallback((data: FormStep5Fields) => {
    setStep5Data(data)
    onNext(data)
  }, [onNext])

  const onBack = useCallback(() => {
    onPrev()
  }, [onPrev])

  return (
    <StepContent description="Enter your preferences" title="Step 5">
      <FormStep5 onCancel={ onBack } onSubmit={ onSubmit } values={ step5Data } />
    </StepContent>
  )
}
