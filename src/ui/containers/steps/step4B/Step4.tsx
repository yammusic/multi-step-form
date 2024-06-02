'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components'
import { useAppActions, useAppState } from '@/domain/store'

import { FormStep4B } from './FormStep4B'
import type { FormStep4BFields, Step4BProps } from './types'

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
