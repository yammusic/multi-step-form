'use client'

import React, { useCallback } from 'react'

import { StepContent } from '@/app/components'
import { useAppActions, useAppState } from '@/domain/store'

import { FormStep1 } from './FormStep1'
import type { FormStep1Fields, Step1Props } from './types'

export function Step1(props: Readonly<Step1Props>) {
  const { onNext } = props
  const { step1Data } = useAppState()
  const { setStep1Data } = useAppActions()

  const onSubmit = useCallback((data: FormStep1Fields) => {
    setStep1Data(data)
    onNext(data)
  }, [])

  return (
    <StepContent description="Enter your personal information" title="Step 1">
      <FormStep1 onSubmit={ onSubmit } values={ step1Data } />
    </StepContent>
  )
}
