export interface Step4BProps {
  onNext: (data: any) => void
  onPrev: () => void
}

export interface FormStep4BProps {
  onCancel?: () => void
  onSubmit: (data: any) => void
  values?: FormStep4BFields | null
}

export interface FormStep4BFields {
  companyName: string
  companySize: string
  companyRole: string
}
