import React, { useEffect } from 'react'
import type { SnackbarProps } from './types'
import { DivMotion } from '../div-motion'

export function Snackbar(props: Readonly<SnackbarProps>) {
  const { message, onClose, color } = props
  if (!message) { return null }

  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <DivMotion className={ `${!color ? 'bg-gray-900' : `bg-${color}-500`} text-white p-4 rounded-md fixed top-4 right-4` }>
      <div
        className="flex justify-between items-center gap-4"
        id="snackbar"
      >
        { message }

        <button className="text-white" onClick={ onClose }>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </DivMotion>
  )
}
