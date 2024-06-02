import React from 'react'

import { DivMotion } from '@/app/components'
import type { SummaryProps } from './types'

/**
 * Component for displaying a summary of user data.
 *
 * @param props - The props for the Summary component.
 * @returns A JSX element representing the Summary component.
 *
 * @example
 * <Summary
 *   data={{
 *     full_name: 'John Doe',
 *     email: 'john.doe@example.com',
 *     phone_number: '+1234567890',
 *     street_address: '123 Main St',
 *     city: 'New York',
 *     postal_code: '10001',
 *     country: 'USA',
 *     username: 'johndoe123',
 *     password: '********',
 *     profile_type: 'Personal',
 *     personal_info: {
 *       date_of_birth: '1990-01-01',
 *       gender: 'Male'
 *     }
 *   }}
 *   onClose={() => console.log('Summary closed')}
 * />
 */
export function Summary(props: Readonly<SummaryProps>) {
  const { data, onClose } = props

  const rowStyles = 'px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'
  const titleStyles = 'text-sm font-medium font-semibold leading-6 text-gray-900'
  const textStyles = 'mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'

  return (
    <DivMotion className="gap-8 rounded-lg border border-gray-900/10 md:p-16 p-8 min-w-[280px] max-w-[600px] w-full bg-white">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-semibold leading-7 text-gray-900">Summary</h3>

        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">This is your summary information</p>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className={ rowStyles }>
            <dt className={ titleStyles }>Full name</dt>

            <dd className={ textStyles }>{ data.full_name }</dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Email address</dt>

            <dd className={ textStyles }>
              <a
                className="text-indigo-600"
                href={ `mailto:${ data.email }` }
                rel="noreferrer"
                target="_blank"
              >
                { data.email }
              </a>
            </dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Phone number</dt>

            <dd className={ textStyles }>
              <a
                className="text-indigo-600"
                href={ `tel:${ data.phone_number }` }
                rel="noreferrer"
              >
                { data.phone_number }
              </a>
            </dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Street address</dt>

            <dd className={ textStyles }>{ data.street_address }</dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>City</dt>

            <dd className={ textStyles }>{ data.city }</dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Postal code</dt>

            <dd className={ textStyles }>{ data.postal_code }</dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Country</dt>

            <dd className={ textStyles }>{ data.country }</dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Username</dt>

            <dd className={ textStyles }>{ data.username }</dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Password</dt>

            <dd className={ textStyles }>{ data.password.replace(/./g, '*') }</dd>
          </div>

          <div className={ rowStyles }>
            <dt className={ titleStyles }>Profile type</dt>

            <dd className={ textStyles }>{ data.profile_type }</dd>
          </div>

          { data.profile_type === 'Personal' && (
            <>
              <div className={ rowStyles }>
                <dt className={ titleStyles }>Date of birth</dt>

                <dd className={ textStyles }>{ data.personal_info?.date_of_birth }</dd>
              </div>

              <div className={ rowStyles }>
                <dt className={ titleStyles }>Gender</dt>

                <dd className={ textStyles }>{ data.personal_info?.gender }</dd>
              </div>
            </>
          ) }

          { data.profile_type === 'Business' && (
            <>
              <div className={ rowStyles }>
                <dt className={ titleStyles }>Company name</dt>

                <dd className={ textStyles }>{ data.business_info?.company_name }</dd>
              </div>

              <div className={ rowStyles }>
                <dt className={ titleStyles }>Company size</dt>

                <dd className={ textStyles }>{ data.business_info?.company_size }</dd>
              </div>

              <div className={ rowStyles }>
                <dt className={ titleStyles }>Role in company</dt>

                <dd className={ textStyles }>{ data.business_info?.role_in_company }</dd>
              </div>
            </>
          ) }

          <div className={ rowStyles } />
        </dl>
      </div>

      <div className="flex justify-center">
        <button
          className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700"
          onClick={ onClose }
        >
          Go to back
        </button>
      </div>
    </DivMotion>
  )
}
