'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components'
import { useAppActions, useAppState } from '@/domain/store'

import { FormStep4A } from './FormStep4A'
import type { FormStep4AFields, Step4AProps } from './types'

/**
 * Component for rendering Step 4 (Personal) of a multi-step form.
 *
 * @param props - The props for the Step 4 (Personal) component.
 * @returns A React component.
 *
 * @example
 * ```tsx
 * <Step4A
 *  onNext={(data) => console.log(data)}
 *  onPrev={() => console.log('Back to previous step')}
 * />
 * ```
 */
export function Step4A(props: Readonly<Step4AProps>) {
  const { onNext, onPrev } = props
  const { step4AData } = useAppState()
  const { setStep4AData } = useAppActions()

  const onSubmit = useCallback((data: FormStep4AFields) => {
    setStep4AData(data)
    onNext(data)
  }, [onNext])

  const onBack = useCallback(() => {
    onPrev()
  }, [onPrev])

  return (
    <StepContent description="Enter your personal details" title="Step 4A">
      <FormStep4A onCancel={ onBack } onSubmit={ onSubmit } values={ step4AData } />
    </StepContent>
  )
}
