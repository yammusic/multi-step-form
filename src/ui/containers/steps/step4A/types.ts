export interface Step4AProps {
  onNext: (data: any) => void
  onPrev: () => void
}

export interface FormStep4AProps {
  onCancel?: () => void
  onSubmit: (data: any) => void
  values?: FormStep4AFields | null
}

export interface FormStep4AFields {
  dateOfBirth: string
  gender: string
}
