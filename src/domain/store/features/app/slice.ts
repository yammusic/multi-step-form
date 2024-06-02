'use client'

import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

import {
  setReady,
  setStep1Data,
  setStep2Data,
  setStep3Data,
  setStep4AData,
  setStep4BData,
  setStep5Data,
} from './actions'
import type { AppState } from './types'

const initialState: AppState = {
  isReady: false,
  step1Data: null,
  step2Data: null,
  step3Data: null,
  step4AData: null,
  step4BData: null,
  step5Data: null,
}

const persistConfig = {
  blacklist: [
    'isReady',
  ],
  key: 'app',
  storage,
  version: 1,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(setReady, (state, { payload }) => ({
      ...state,
      isReady: payload,
    }))

    addCase(setStep1Data, (state, { payload }) => ({
      ...state,
      step1Data: payload,
    }))

    addCase(setStep2Data, (state, { payload }) => ({
      ...state,
      step2Data: payload,
    }))

    addCase(setStep3Data, (state, { payload }) => ({
      ...state,
      step3Data: payload,
    }))

    addCase(setStep4AData, (state, { payload }) => ({
      ...state,
      step4AData: payload,
    }))

    addCase(setStep4BData, (state, { payload }) => ({
      ...state,
      step4BData: payload,
    }))

    addCase(setStep5Data, (state, { payload }) => ({
      ...state,
      step5Data: payload,
    }))
  },
})

export const appReducer = persistReducer<AppState>(persistConfig, appSlice.reducer)
