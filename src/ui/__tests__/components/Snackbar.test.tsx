import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import { Snackbar } from '@/app/components/snackbar'

describe('Snackbar', () => {
  it('renders snackbar with provided message', () => {
    render(<Snackbar message="Snackbar message" onClose={ () => {} } />)
    const snackbarMessage = screen.getByText('Snackbar message')
    expect(snackbarMessage).toBeInTheDocument()
  })

  it('auto-closes after 3 seconds', async () => {
    const onCloseMock = jest.fn()
    render(<Snackbar message="Snackbar message" onClose={ onCloseMock } />)

    await new Promise(resolve => setTimeout(resolve, 3000))
    await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1))
  })

  it('closes when close button is clicked', () => {
    const onCloseMock = jest.fn()
    render(<Snackbar message="Snackbar message" onClose={ onCloseMock } />)

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
