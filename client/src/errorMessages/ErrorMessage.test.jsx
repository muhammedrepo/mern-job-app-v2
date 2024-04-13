import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ErrorMessage from './ErrorMessage'

describe('ErrorMessage', () => {
  it('should render the error message', () => {
    // Test code goes here
    render(<ErrorMessage />)
    screen.debug()
    expect(screen.getByTestId('message-container')).toHaveTextContent(
      'Something went wrong'
    )
  })
})
