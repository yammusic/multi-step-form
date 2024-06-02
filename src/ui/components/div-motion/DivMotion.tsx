import React from 'react'
import { motion } from 'framer-motion'

import type { DivMotionProps } from './types'

/**
 * A React functional component that renders a motion-enabled div.
 *
 * @param {Readonly<DivMotionProps>} props - The properties for the DivMotion component.
 * @returns A motion-enabled div element.
 *
 * @example
 * ```tsx
 * <DivMotion className="my-class">
 *   <p>Animated content</p>
 * </DivMotion>
 * ```
 */
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
