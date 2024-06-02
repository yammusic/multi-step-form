export interface Step2Props {
  onNext: (data: any) => void
  onPrev: () => void
}

export interface FormStep2Props {
  onCancel?: () => void
  onSubmit: (data: any) => void
  values?: FormStep2Fields | null
}

export interface FormStep2Fields {
  address: string
  city: string
  postalCode: string
  country: string
}
