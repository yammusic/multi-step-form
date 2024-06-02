'use client'

import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from '../features'

type Reducers = {
  app: typeof appReducer
}

export const reducers: Reducers = {
  app: appReducer,
}

export const rootReducer = combineReducers({ ...reducers })
