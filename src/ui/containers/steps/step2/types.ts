/**
 * Props for the Step 2 component.
 */
export interface Step2Props {
  /**
   * Callback function to be called when moving to the next step.
   * @param data - The data from Step 2.
   */
  onNext: (data: any) => void

  /**
   * Callback function to be called when moving to the previous step.
   */
  onPrev: () => void
}

/**
 * Props for the Step 2 form component.
 */
export interface FormStep2Props {
  /**
   * Callback function to be called when canceling the form.
   */
  onCancel?: () => void

  /**
   * Callback function to be called when submitting the form.
   * @param data - The form data from Step 2.
   */
  onSubmit: (data: any) => void

  /**
   * Initial values for the Step 2 form fields.
   */
  values?: FormStep2Fields | null
}

/**
 * Interface representing the fields of Step 2 form.
 */
export interface FormStep2Fields {
  /**
   * Address input field value.
   */
  address: string

  /**
   * City input field value.
   */
  city: string

  /**
   * Postal code input field value.
   */
  postalCode: string

  /**
   * Country input field value.
   */
  country: string
}
