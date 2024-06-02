import React from 'react'

import type { StepContentProps } from './types'

export function StepContent(props: Readonly<StepContentProps>) {
  const { title, description, children } = props

  return (
    <div className="grid grid-cols-3 gap-8 rounded-lg border border-gray-900/10 md:p-16 p-8 min-w-[280px] max-w-[900px] w-full bg-white">
      <div className="md:col-span-1 col-span-3 flex flex-col gap-2 mr-8">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">
          { title }
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          { description }
        </p>
      </div>

      <div className="md:col-span-2 col-span-3 ">
        { children }
      </div>
    </div>
  )
}
