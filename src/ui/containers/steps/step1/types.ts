/**
 * Props for the Step1 component.
 */
export interface Step1Props {
  /**
   * Callback function to be called when moving to the next step.
   * @param data - The data from Step 1.
   */
  onNext: (data: any) => void
}

/**
 * Props for the Step1 form component.
 */
export interface FormStep1Props {
  /**
   * Callback function to be called when the form is submitted.
   * @param data - The data from Step 1.
   */
  onSubmit: (data: any) => void

  /**
   * Optional initial values for the Step 1 form fields.
   */
  values?: FormStep1Fields | null
}

/**
 * Interface representing the fields of Step 1 form.
 */
export interface FormStep1Fields {
  /**
   * Full name input field value.
   */
  fullName: string

  /**
   * Email input field value.
   */
  email: string

  /**
   * Phone number input field value.
   */
  phoneNumber: string
}
