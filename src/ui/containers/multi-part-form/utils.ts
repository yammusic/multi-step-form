import type {
  FormStep1Fields,
  FormStep2Fields,
  FormStep3Fields,
  FormStep4AFields,
  FormStep4BFields,
  FormStep5Fields,
} from '../steps'

type Values = FormStep1Fields
  & FormStep2Fields
  & FormStep3Fields
  & FormStep4AFields
  & FormStep4BFields
  & FormStep5Fields


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
