import axios from 'axios'

const PERSONAL_URL = 'https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942'
const BUSINESS_URL = 'https://run.mocky.io/v3/e1724715-51d4-4ed2-b20f-cd3c59659e47'

/**
 * Interface representing the form data structure.
 */
interface Data {
  /**
   * Full name of the user.
   */
  full_name: string

  /**
   * Email address of the user.
   */
  email: string

  /**
   * Phone number of the user.
   */
  phone_number: string

  /**
   * Street address of the user.
   */
  street_address: string

  /**
   * City of the user.
   */
  city: string

  /**
   * Postal code of the user.
   */
  postal_code: string

  /**
   * Country of the user.
   */
  country: string

  /**
   * Username chosen by the user.
   */
  username: string

  /**
   * Password chosen by the user.
   */
  password: string

  /**
   * Confirmation of the password.
   */
  confirm_password: string

  /**
   * Profile type selected by the user (personal or business).
   */
  profile_type: string

  /**
   * Whether the user wants to receive notifications.
   */
  notifications: boolean

  /**
   * How the user heard about the service.
   */
  how_heard: string

  /**
   * Whether the user agreed to the terms and conditions.
   */
  terms_agreed: boolean

  /**
   * Additional personal information if profile type is personal.
   */
  personal_info: {
    /**
     * Date of birth of the user.
     */
    date_of_birth: string

    /**
     * Gender of the user.
     */
    gender: string
  } | null

  /**
   * Additional business information if profile type is business.
   */
  business_info: {
    /**
     * Name of the company.
     */
    company_name: string

    /**
     * Size of the company.
     */
    company_size: string

    /**
     * Role of the user in the company.
     */
    role_in_company: string
  } | null
}

/**
 * Interface representing the response data structure from the API.
 */
export interface ResponseData {
  /**
   * Data sent in the request.
   */
  data: Data

  /**
   * Message from the API.
   */
  message: string

  /**
   * Status of the API response.
   */
  status: string
}

/**
 * Sends the form data to the appropriate API endpoint based on the profile type.
 *
 * @function sendData
 * @param {Data} data - The form data to be sent.
 * @returns The response data from the API or undefined if an error occurred.
 */
export const sendData = async (data: Data) => {
  const url = (data.profile_type === 'business') ? BUSINESS_URL : PERSONAL_URL

  try {
    const { data: response } = await axios.post<ResponseData>(url, { data })
    return response
  } catch (err) {
    console.error(err)
  }
}
