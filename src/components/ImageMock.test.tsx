import { render, screen } from '@testing-library/react'
import ImageMock from './ImageMock'

describe('ImageMock', () => {
    it('renders', () => {
        render(<ImageMock />)
        const imageMock = screen.getByTestId('image-mock')
        expect(imageMock).toBeInTheDocument()
    })

    it('renders with additional classes when className prop is provided', () => {
        render(<ImageMock className="extra-class" />)
        const imageMock = screen.getByTestId('image-mock')
        expect(imageMock).toHaveClass('extra-class')
    })
})
