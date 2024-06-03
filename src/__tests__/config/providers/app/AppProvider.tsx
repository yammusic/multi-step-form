import React from 'react'
import type { ReactNode } from 'react'
import { StoreProvider } from '@/domain/store'

type Props = {
  children: ReactNode
}

export function AppProvider(props: Readonly<Props>) {
  const { children } = props

  return (
    <StoreProvider>
      { children }
    </StoreProvider>
  )
}
