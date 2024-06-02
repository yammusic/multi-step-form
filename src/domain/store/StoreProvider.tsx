'use client'

import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor as appPersistor, store as appStore } from './config/store'
import type { AppStore } from './shared/types/store'
import type { StoreProviderProps } from './props-types'

// TODO: Remove for prod
// appPersistor.purge()

export function StoreProvider(props: Readonly<StoreProviderProps>) {
  const {
    children,
    store = appStore,
    persistor = appPersistor,
  } = props

  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = store
  }

  return (
    <Provider store={ storeRef.current }>
      <PersistGate loading={ null } persistor={ persistor }>
        { children }
      </PersistGate>
    </Provider>
  )
}
