import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import type { ResponseData } from '../services/data'
import { sendData } from '../services/data'

const mock = new MockAdapter(axios)

const exampleDataPersonal = {
  full_name: 'Jane Doe',
  email: 'jane.doe@example.com',
  phone_number: '1234567890',
  street_address: '123 Main St',
  city: 'Anytown',
  postal_code: '12345',
  country: 'USA',
  username: 'janedoe',
  password: 'Password123!',
  confirm_password: 'Password123!',
  profile_type: 'personal',
  notifications: true,
  how_heard: 'Friend',
  terms_agreed: true,
  personal_info: {
    date_of_birth: '1990-01-01',
    gender: 'female'
  },
  business_info: null
}

const exampleDataBusiness = {
  full_name: 'John Doe',
  email: 'john.doe@example.com',
  phone_number: '0987654321',
  street_address: '456 Elm St',
  city: 'Othertown',
  postal_code: '54321',
  country: 'USA',
  username: 'johndoe',
  password: 'Password123!',
  confirm_password: 'Password123!',
  profile_type: 'business',
  notifications: true,
  how_heard: 'Online',
  terms_agreed: true,
  personal_info: null,
  business_info: {
    company_name: 'Doe Inc.',
    company_size: '10-50',
    role_in_company: 'CEO'
  }
}

const exampleResponseData: ResponseData = {
  data: exampleDataPersonal,
  message: 'Success',
  status: '200'
}

describe('sendData', () => {
  afterEach(() => {
    mock.reset()
  })

  it('should send personal profile data to the personal URL and return the response', async () => {
    mock.onPost('https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942').reply(200, exampleResponseData)

    const response = await sendData(exampleDataPersonal)

    expect(response).toEqual(exampleResponseData)
  })

  it('should send business profile data to the business URL and return the response', async () => {
    mock.onPost('https://run.mocky.io/v3/e1724715-51d4-4ed2-b20f-cd3c59659e47').reply(200, exampleResponseData)

    const response = await sendData(exampleDataBusiness)

    expect(response).toEqual(exampleResponseData)
  })

  it('should handle errors gracefully and return undefined', async () => {
    mock.onPost('https://run.mocky.io/v3/892bc38b-c7e2-4432-a478-2eac4df57942').networkError()

    const response = await sendData(exampleDataPersonal)

    expect(response).toBeUndefined()
  })
})
