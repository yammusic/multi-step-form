'use client'

import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from '../types/store'

/**
 * A custom hook that returns the useDispatch hook with type annotations.
 * @returns The typed dispatch function.
 */
export const useAppDispatch =  useDispatch.withTypes<AppDispatch>()

/**
 * A custom hook that returns the useSelector hook with type annotations.
 * @returns The typed state selector function.
 */
export const useAppSelector = useSelector.withTypes<RootState>()

/**
 * A custom hook that returns the useStore hook with type annotations.
 * @returns The typed store object.
 */
export const useAppStore = useStore.withTypes<AppStore>()
