import type { ResponseData } from '@/infra/services'


/**
 * Props for the Summary component.
 */
export interface SummaryProps {
  /**
   * Data to be displayed in the summary.
   */
  data: ResponseData['data']

  /**
   * Function to handle closing the summary.
   */
  onClose: () => void
}
