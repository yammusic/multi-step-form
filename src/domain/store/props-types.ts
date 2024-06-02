import type { ReactNode } from 'react'
import type { AppPersistor, AppStore } from './shared/types/store'

export interface StoreProviderProps {
  children: ReactNode
  isDev?: boolean
  persistor?: AppPersistor
  store?: AppStore
}
