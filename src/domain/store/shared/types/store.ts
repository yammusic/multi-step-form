import type { makeStore } from '../../config/store'

/**
 * Options for creating a Redux store.
 * @interface MakeStoreOptions
 */
export interface MakeStoreOptions {
  /**
   * A boolean flag indicating if the environment is development.
   * @type {boolean}
   * @optional
   */
  isDev?: boolean
}

/**
 * The type representing the Redux store object.
 * @type {ReturnType<typeof makeStore>['store']}
 */
export type AppStore = ReturnType<typeof makeStore>['store']

/**
 * The type representing the Redux persistor object.
 * @type {ReturnType<typeof makeStore>['persistor']}
 */
export type AppPersistor = ReturnType<typeof makeStore>['persistor']

/**
 * The type representing the root state of the Redux store.
 * @type {ReturnType<AppStore['getState']>}
 */
export type RootState = ReturnType<AppStore['getState']>

/**
 * The type representing the dispatch function of the Redux store.
 * @type {AppStore['dispatch']}
 */
export type AppDispatch = AppStore['dispatch']
