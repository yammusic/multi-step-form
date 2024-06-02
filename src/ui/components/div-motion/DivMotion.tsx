import React from 'react'
import { motion } from 'framer-motion'

import type { DivMotionProps } from './types'

export function DivMotion(props: Readonly<DivMotionProps>) {
  const { children, ...rest } = props

  return (
    <motion.div
      animate={ { opacity: 1, y: 0 } }
      exit={ { opacity: 0, y: -20 } }
      initial={ { opacity: 0, y: 20 } }
      transition={ { duration: 0.3 } }
      { ...rest }
    >
      { children }
    </motion.div>
  )
}
