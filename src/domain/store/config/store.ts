'use client'

import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

import { rootReducer as reducer } from './reducers'
import type { MakeStoreOptions } from '../shared'

export const makeStore = (opts: MakeStoreOptions = {}) => {
  const { isDev = false } = opts

  const middleware = (getDefaultMiddleware: any) => {
    return getDefaultMiddleware({ serializableCheck: false })
  }

  // Create store
  const store = configureStore({
    devTools: isDev && { trace: true },
    middleware,
    reducer,
  })

  // Create persistor
  const persistor = persistStore(store)

  return { store, persistor }
}

export const useStore = (isDev: boolean = false) => makeStore({ isDev })

export const { store, persistor } = makeStore()
