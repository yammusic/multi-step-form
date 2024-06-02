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

/**
 * Custom hook to access the application state.
 * @returns The application state from the Redux store.
 */
export const useAppState = () => (
  useSelector(({ app }: RootState) => app)
)

/**
 * Custom hook to bind and provide action creators for the application.
 * @returns The bound action creators for dispatching.
 */
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
