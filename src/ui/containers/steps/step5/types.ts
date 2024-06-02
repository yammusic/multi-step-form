/**
 * Represents the props for the Step5 component.
 */
export interface Step5Props {
  /**
   * Function to handle the next step.
   * @param data - Data from the form.
   */
  onNext: (data: any) => void

  /**
   * Function to handle the previous step.
   */
  onPrev: () => void
}

/**
 * Represents the props for the FormStep5 component.
 */
export interface FormStep5Props {
  /**
   * Function to handle cancellation of the form.
   */
  onCancel?: () => void

  /**
   * Function to handle form submission.
   * @param data - Data from the form.
   */
  onSubmit: (data: any) => void

  /**
   * Values for the form fields.
   */
  values?: FormStep5Fields | null
}

/**
 * Represents the fields for the FormStep5 component.
 */
export interface FormStep5Fields {
  /**
   * Notification preference field.
   */
  notifications: boolean

  /**
   * Information about the service field.
   */
  aboutService: string

  /**
   * Terms agreement field.
   */
  terms: boolean
}
