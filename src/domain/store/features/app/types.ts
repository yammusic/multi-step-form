import type {
  FormStep1Fields,
  FormStep2Fields,
  FormStep3Fields,
  FormStep4AFields,
  FormStep4BFields,
  FormStep5Fields,
} from '@/app/containers/steps'

/**
 * Interface representing the application state.
 */
export interface AppState {
  /**
   * Data for step 1 of the form.
   */
  step1Data: FormStep1Fields | null

  /**
   * Data for step 2 of the form.
   */
  step2Data: FormStep2Fields | null

  /**
   * Data for step 3 of the form.
   */
  step3Data: FormStep3Fields | null

  /**
   * Data for step 4A of the form (Personal profile).
   */
  step4AData: FormStep4AFields | null

  /**
   * Data for step 4B of the form (Business profile).
   */
  step4BData: FormStep4BFields | null

  /**
   * Data for step 5 of the form.
   */
  step5Data: FormStep5Fields | null

  /**
   * Indicates if the application is ready.
   */
  isReady: boolean
}
