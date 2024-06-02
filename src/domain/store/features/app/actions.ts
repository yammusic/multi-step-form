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

/**
 * Action to set the readiness state of the application.
 */
export const setReady = createAction<boolean>('@app/SET_READY')

/**
 * Action to set the data for step 1 of the form.
 */
export const setStep1Data = createAction<FormStep1Fields | null>('@app/SET_STEP_1_DATA')

/**
 * Action to set the data for step 2 of the form.
 */
export const setStep2Data = createAction<FormStep2Fields | null>('@app/SET_STEP_2_DATA')

/**
 * Action to set the data for step 3 of the form.
 */
export const setStep3Data = createAction<FormStep3Fields | null>('@app/SET_STEP_3_DATA')

/**
 * Action to set the data for step 4A of the form.
 */
export const setStep4AData = createAction<FormStep4AFields | null>('@app/SET_STEP_4A_DATA')

/**
 * Action to set the data for step 4B of the form.
 */
export const setStep4BData = createAction<FormStep4BFields | null>('@app/SET_STEP_4B_DATA')

/**
 * Action to set the data for step 5 of the form.
 */
export const setStep5Data = createAction<FormStep5Fields | null>('@app/SET_STEP_5_DATA')

/**
 * Action to start the application.
 */
export const appStart = createAction('@app/START')
