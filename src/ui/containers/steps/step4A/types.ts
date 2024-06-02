/**
 * Represents the props for the Step4A component.
 */
export interface Step4AProps {
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
 * Represents the props for the FormStep4A component.
 */
export interface FormStep4AProps {
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
  values?: FormStep4AFields | null
}

/**
 * Represents the fields for the FormStep4A component.
 */
export interface FormStep4AFields {
  /**
   * Date of birth field.
   */
  dateOfBirth: string

  /**
   * Gender field.
   */
  gender: string
}
