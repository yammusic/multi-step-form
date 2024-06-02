import React from 'react'
import { MultiPartForm } from '@/app/containers/multi-part-form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:px-24 px-16 py-24 ">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-grey-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <MultiPartForm />
    </main>
  )
}
