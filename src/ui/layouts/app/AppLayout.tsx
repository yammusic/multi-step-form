import React from 'react'
import { Roboto } from 'next/font/google'
import '@/domain/polyfills'
import '@/app/styles/globals.css'

import { StoreProvider } from '@/domain/store'
import type { AppLayoutProps } from './types'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={ roboto.className }>
        <StoreProvider>
          { children }
        </StoreProvider>
      </body>
    </html>
  )
}
