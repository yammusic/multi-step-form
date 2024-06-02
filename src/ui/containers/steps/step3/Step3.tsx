'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components'
import { useAppActions, useAppState } from '@/domain/store'

import { FormStep3 } from './FormStep3'
import type { FormStep3Fields, Step3Props } from './types'

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
