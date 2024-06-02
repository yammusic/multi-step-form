export interface Step3Props {
  onNext: (data: any) => void
  onPrev: () => void
}

export interface FormStep3Props {
  onCancel?: () => void
  onSubmit: (data: any) => void
  values?: FormStep3Fields | null
}

export interface FormStep3Fields {
  username: string
  password: string
  repeatPassword: string
  profileType: string
}
