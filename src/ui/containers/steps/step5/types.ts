export interface Step5Props {
  onNext: (data: any) => void
  onPrev: () => void
}

export interface FormStep5Props {
  onCancel?: () => void
  onSubmit: (data: any) => void
  values?: FormStep5Fields | null
}

export interface FormStep5Fields {
  notifications: boolean
  aboutService: string
  terms: boolean
}
