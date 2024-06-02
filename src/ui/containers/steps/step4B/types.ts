/**
 * Represents the props for the Step4B component.
 */
export interface Step4BProps {
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
 * Represents the props for the FormStep4B component.
 */
export interface FormStep4BProps {
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
  values?: FormStep4BFields | null
}

/**
 * Represents the fields for the FormStep4B component.
 */
export interface FormStep4BFields {
  /**
   * Company name field.
   */
  companyName: string

  /**
   * Company size field.
   */
  companySize: string

  /**
   * Company role field.
   */
  companyRole: string
}
