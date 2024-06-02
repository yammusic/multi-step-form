'use client'

import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor as appPersistor, store as appStore } from './config/store'
import type { AppStore } from './shared/types/store'
import type { StoreProviderProps } from './types'

/**
 * StoreProvider component to provide Redux store and persistor to the application.
 *
 * @param {StoreProviderProps} props - The properties passed to the component.
 * @returns {JSX.Element} The provider component wrapping the children with Redux and PersistGate.
 */
export function StoreProvider(props: Readonly<StoreProviderProps>) {
  const {
    children,
    store = appStore,
    persistor = appPersistor,
  } = props

  // Reference to the Redux store
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
