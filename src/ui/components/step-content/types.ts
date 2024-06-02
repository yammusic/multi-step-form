import type { ReactNode } from 'react'

/**
 * Represents the properties for the StepContent component.
 */
export interface StepContentProps {
  /**
   * The title of the step content.
   */
  title: string

  /**
   * The description of the step content.
   */
  description: string

  /**
   * The content to be displayed within the step.
   */
  children: ReactNode
}
