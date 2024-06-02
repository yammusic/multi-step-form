/**
 * Props for the Step3 component.
 */
export interface Step3Props {
  /**
   * Handler for moving to the next step.
   */
  onNext: (data: any) => void

  /**
   * Handler for moving to the previous step.
   */
  onPrev: () => void
}

/**
 * Props for the FormStep3 component.
 */
export interface FormStep3Props {
  /**
   * Handler for cancelling the form submission.
   */
  onCancel?: () => void

  /**
   * Handler for submitting the form data.
   */
  onSubmit: (data: any) => void

  /**
   * Values for pre-populating the form fields.
   */
  values?: FormStep3Fields | null
}

/**
 * Form fields for Step 3.
 */
export interface FormStep3Fields {
  /**
   * The username input value.
   */
  username: string

  /**
   * The password input value.
   */
  password: string

  /**
   * The repeated password input value.
   */
  repeatPassword: string

  /**
   * The profile type input value.
   */
  profileType: string
}
