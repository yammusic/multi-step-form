'use client'

import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

import { rootReducer as reducer } from './reducers'
import type { MakeStoreOptions } from '../shared'


/**
 * Creates and configures the Redux store.
 *
 * @param {MakeStoreOptions} [opts={}] - Options to configure the store.
 * @param {boolean} [opts.isDev=false] - Flag indicating if the environment is development.
 * @returns {{ store: typeof configureStore, persistor: typeof persistStore }} The configured store and persistor.
 */
export const makeStore = (opts: MakeStoreOptions = {}) => {
  const { isDev = false } = opts

  const middleware = (getDefaultMiddleware: any) => {
    return getDefaultMiddleware({ serializableCheck: false })
  }

  const store = configureStore({
    devTools: isDev && { trace: true },
    middleware,
    reducer,
  })
  const persistor = persistStore(store)

  return { store, persistor }
}

/**
 * Hook to create and configure the Redux store.
 * @param {boolean} [isDev=false] - Flag indicating if the environment is development.
 * @returns {{ store: typeof configureStore, persistor: typeof persistStore }} The configured store and persistor.
 */
export const useStore = (isDev: boolean = false) => makeStore({ isDev })

/**
 * The default configured store and persistor.
 */
export const { store, persistor } = makeStore()
