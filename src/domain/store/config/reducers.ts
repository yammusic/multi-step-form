'use client'

import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from '../features'

/**
 * Type definition for the application's reducers.
 * @typedef {Object} Reducers
 * @property {typeof appReducer} app - The reducer for the app feature.
 */
type Reducers = {
  app: typeof appReducer
}

/**
 * An object containing all the application's reducers.
 * @type {Reducers}
 */
export const reducers: Reducers = {
  app: appReducer,
}

/**
 * The root reducer combining all feature reducers.
 * @type {typeof combineReducers}
 */
export const rootReducer = combineReducers({ ...reducers })
