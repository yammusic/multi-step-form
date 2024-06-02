/* eslint-disable react/no-array-index-key */
'use client'

import React, { useCallback, useState } from 'react'

import { DivMotion, Snackbar } from '@/app/components'
import { useAppActions, useAppState } from '@/domain/store'
import type { ResponseData } from '@/infra/services'
import { sendData } from '@/infra/services'

import { Summary } from '../summary'
import { Step1 } from '../steps/step1'
import { Step2 } from '../steps/step2'
import { Step3 } from '../steps/step3'
import { Step4A } from '../steps/step4A'
import { Step4B } from '../steps/step4B'
import { Step5 } from '../steps/step5'
import { mapStepsValuesToData } from './utils'

export function MultiPartForm() {
  const [step, setStep] = useState(1)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [summaryData, setSummaryData] = useState<ResponseData['data'] | null>(null)
  const {
    step1Data,
    step2Data,
    step3Data,
    step4AData,
    step4BData,
    step5Data,
  } = useAppState()
  const {
    setStep1Data,
    setStep2Data,
    setStep3Data,
    setStep4AData,
    setStep4BData,
    setStep5Data,
  } = useAppActions()

  const resetData = useCallback(() => {
    setStep1Data(null)
    setStep2Data(null)
    setStep3Data(null)
    setStep4AData(null)
    setStep4BData(null)
    setStep5Data(null)
    setStep(1)
  }, [])

  const onFinish = useCallback(async () => {
    const dataValues = mapStepsValuesToData({
      ...(step1Data as any),
      ...(step2Data as any),
      ...(step3Data as any),
      ...(step4AData as any),
      ...(step4BData as any),
      ...(step5Data as any),
    })

    const { message, data } = await sendData(dataValues) as ResponseData
    setSummaryData(data)
    setSnackbarMessage(message ?? 'Unknown error')
    setShowSnackbar(true)
    resetData()
  }, [
    step1Data,
    step2Data,
    step3Data,
    step4AData,
    step4BData,
    step5Data,
  ])

  const onPrevStep = useCallback(() => {
    setStep(step - (step > 1 ? 1 : 0))
  }, [step])

  const onNextStep = useCallback(async () => {
    setStep(step + (step < 5 ? 1 : 0))

    if (step === 5) {
      onFinish()
    }
  }, [step, onFinish])

  return (
    <>
      <div className={ 'flex items-center justify-center mb-16 mt-0' }>
        <h2 className="text-3xl font-bold leading-6 text-gray-900">Multi-Step Form</h2>
      </div>

      { !summaryData && (
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center gap-x-4">
            { Array.from({ length: 5 }).map((_, idx) => (
              <div
                className={ `h-10 w-10 rounded-full flex items-center justify-center ${ step >= idx + 1 ? 'bg-indigo-600' : 'bg-gray-300' }` }
                key={ `step-${idx}` }
              >
                <span className="text-lg font-medium font-bold leading-6 text-white">{ `${idx + 1}` }</span>
              </div>
            ))}
          </div>

          { (step === 1) && (
            <DivMotion>
              <Step1 onNext={ onNextStep } />
            </DivMotion>
          ) }

          { (step === 2) && (
            <DivMotion>
              <Step2 onNext={ onNextStep } onPrev={ onPrevStep } />
            </DivMotion>
          ) }

          { (step === 3) && (
            <DivMotion>
              <Step3 onNext={ onNextStep } onPrev={ onPrevStep } />
            </DivMotion>
          ) }

          { (step === 4 && step3Data?.profileType === 'personal') && (
            <DivMotion>
              <Step4A onNext={ onNextStep } onPrev={ onPrevStep } />
            </DivMotion>
          ) }

          { (step === 4 && step3Data?.profileType === 'business') && (
            <DivMotion>
              <Step4B onNext={ onNextStep } onPrev={ onPrevStep } />
            </DivMotion>
          ) }

          { (step === 5) && (
            <DivMotion>
              <Step5 onNext={ onNextStep } onPrev={ onPrevStep } />
            </DivMotion>
          ) }
        </div>
      ) }

      { !!summaryData && <Summary data={ summaryData } onClose={ () => setSummaryData(null) } /> }

      { !!showSnackbar && (
        <Snackbar
          color="green"
          message={ snackbarMessage }
          onClose={ () => setShowSnackbar(false) }
        />
      ) }
    </>
  )
}
