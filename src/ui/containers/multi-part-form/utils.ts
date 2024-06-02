import type {
  FormStep1Fields,
  FormStep2Fields,
  FormStep3Fields,
  FormStep4AFields,
  FormStep4BFields,
  FormStep5Fields,
} from '../steps'

/**
 * Represents the combined form field values from all steps.
 */
type Values = FormStep1Fields
  & FormStep2Fields
  & FormStep3Fields
  & FormStep4AFields
  & FormStep4BFields
  & FormStep5Fields

  /**
 * Maps the values from form steps to the data structure required for submission.
 *
 * @param values - The combined form field values.
 * @returns The mapped data structure ready for submission.
 *
 * @example
 * const formValues = {
 *   fullName: 'John Doe',
 *   email: 'john.doe@example.com',
 *   // Other form values...
 * };
 * const data = mapStepsValuesToData(formValues);
 * console.log(data); // Output: { full_name: 'John Doe', email: 'john.doe@example.com', ... }
 */
export const mapStepsValuesToData = (values: Values) => {
  const data: any = {
    full_name: values.fullName,
    email: values.email,
    phone_number: values.phoneNumber,
    street_address: values.address,
    city: values.city,
    postal_code: values.postalCode,
    country: values.country,
    username: values.username,
    password: values.password,
    confirm_password: values.repeatPassword,
    profile_type: values.profileType,
    notifications: values.notifications,
    how_heard: values.aboutService,
    terms_agreed: values.terms,
    personal_info: null,
    business_info: null,
  }

  if (values.profileType === 'business') {
    data.business_info = {
      company_name: values.companyName,
      company_size: values.companySize,
      role_in_company: values.companyRole,
    }
  } else if (values.profileType === 'personal') {
    data.personal_info = {
      date_of_birth: (values.dateOfBirth as any).startDate,
      gender: values.gender,
    }
  }

  return data
}
