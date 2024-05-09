import Button from './Button'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
  it('renders the correct text', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByTestId('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
  })

})
