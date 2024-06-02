import type { ReactNode } from 'react'
import type { AppPersistor, AppStore } from './shared/types/store'

/**
 * Props for the StoreProvider component.
 * @interface StoreProviderProps
 */
export interface StoreProviderProps {
  /**
   * The children elements to be rendered within the StoreProvider.
   * @type {ReactNode}
   */
  children: ReactNode

  /**
   * A boolean flag to indicate if the environment is development.
   * @type {boolean}
   * @optional
   */
  isDev?: boolean

  /**
   * The persistor object for managing the store persistence.
   * @type {AppPersistor}
   * @optional
   */
  persistor?: AppPersistor

  /**
   * The Redux store object.
   * @type {AppStore}
   * @optional
   */
  store?: AppStore
}
