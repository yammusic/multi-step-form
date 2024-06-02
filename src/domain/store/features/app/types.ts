import type {
  FormStep1Fields,
  FormStep2Fields,
  FormStep3Fields,
  FormStep4AFields,
  FormStep4BFields,
  FormStep5Fields,
} from '@/app/containers/steps'

/* App State */
export interface AppState {
  step1Data: FormStep1Fields | null
  step2Data: FormStep2Fields | null
  step3Data: FormStep3Fields | null
  step4AData: FormStep4AFields | null
  step4BData: FormStep4BFields | null
  step5Data: FormStep5Fields | null
  isReady: boolean
}
