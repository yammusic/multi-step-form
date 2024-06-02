'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components'
import { FormStep5 } from './FormStep5'
import type { FormStep5Fields, Step5Props } from './types'
import { useAppActions, useAppState } from '@/domain/store'

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
