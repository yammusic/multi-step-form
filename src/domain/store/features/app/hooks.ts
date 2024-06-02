'use client'

import { useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { useAppDispatch } from '../../shared/hooks'
import type { RootState } from '../../shared'
import {
  appStart,
  setStep1Data,
  setStep2Data,
  setStep3Data,
  setStep4AData,
  setStep4BData,
  setStep5Data,
  setReady,
} from './actions'

/* Selectors */
export const useAppState = () => (
  useSelector(({ app }: RootState) => app)
)

/* Actions */
export const useAppActions = () => ({
  ...bindActionCreators({
    appStart,
    setReady,
    setStep1Data,
    setStep2Data,
    setStep3Data,
    setStep4AData,
    setStep4BData,
    setStep5Data,
  }, useAppDispatch())
})
