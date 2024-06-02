export interface Step1Props {
  onNext: (data: any) => void
}

export interface FormStep1Props {
  onSubmit: (data: any) => void
  values?: FormStep1Fields | null
}

export interface FormStep1Fields {
  fullName: string
  email: string
  phoneNumber: string
}
