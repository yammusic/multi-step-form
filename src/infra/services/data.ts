import axios from 'axios'

const PERSONAL_URL = 'https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942'
const BUSINESS_URL = 'https://run.mocky.io/v3/e1724715-51d4-4ed2-b20f-cd3c59659e47'

interface Data {
  full_name: string
  email: string
  phone_number: string
  street_address: string
  city: string
  postal_code: string
  country: string
  username: string
  password: string
  confirm_password: string
  profile_type: string
  notifications: boolean
  how_heard: string
  terms_agreed: boolean
  personal_info: {
    date_of_birth: string
    gender: string
  } | null
  business_info: {
    company_name: string
    company_size: string
    role_in_company: string
  } | null
}

export interface ResponseData {
  data: Data
  message: string
  status: string
}

export const sendData = async (data: Data) => {
  const url = (data.profile_type === 'business') ? BUSINESS_URL : PERSONAL_URL

  try {
    const { data: response } = await axios.post<ResponseData>(url, { data })
    return response
  } catch (err) {
    console.error(err)
  }
}
