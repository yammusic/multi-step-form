import type { MotionProps } from 'framer-motion'

/**
 * Interface representing properties for a motion-enabled div component.
 * @extends {MotionProps}
 */
export interface DivMotionProps extends MotionProps {
  /**
   * Optional CSS class name for styling the component.
   */
  className?: string
}
