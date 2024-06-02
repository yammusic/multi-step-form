import type { ResponseData } from '@/infra/services'

export interface SummaryProps {
  data: ResponseData['data']
  onClose: () => void
}
