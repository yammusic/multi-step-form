import React from 'react'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import { AppLayout } from '@/app/layouts'

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'A simple multi-step form with React, Next.js and Tailwind CSS.',
}

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <AppLayout>
      { children }
    </AppLayout>
  )
}
