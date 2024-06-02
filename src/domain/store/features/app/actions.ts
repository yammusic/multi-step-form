'use client'

import { createAction } from '@reduxjs/toolkit'

import type {
  FormStep1Fields,
  FormStep2Fields,
  FormStep3Fields,
  FormStep4AFields,
  FormStep4BFields,
  FormStep5Fields,
} from '@/app/containers/steps'


export const setReady = createAction<boolean>('@app/SET_READY')
export const setStep1Data = createAction<FormStep1Fields | null>('@app/SET_STEP_1_DATA')
export const setStep2Data = createAction<FormStep2Fields | null>('@app/SET_STEP_2_DATA')
export const setStep3Data = createAction<FormStep3Fields | null>('@app/SET_STEP_3_DATA')
export const setStep4AData = createAction<FormStep4AFields | null>('@app/SET_STEP_4A_DATA')
export const setStep4BData = createAction<FormStep4BFields | null>('@app/SET_STEP_4B_DATA')
export const setStep5Data = createAction<FormStep5Fields | null>('@app/SET_STEP_5_DATA')
export const appStart = createAction('@app/START')
