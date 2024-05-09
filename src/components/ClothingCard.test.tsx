import { render, screen } from '@testing-library/react'
import ClothingCard from './ClothingCard'

describe('ClothingCard', () => {
    it('renders the description', () => {
        render(<ClothingCard description="Test description" basePrice={100} discount={0} moreColors={false} />)
        const descriptionElement = screen.getByText(/test description/i)
        expect(descriptionElement).toBeInTheDocument()
        expect(descriptionElement).toHaveTextContent('Test description')
        const priceElement = screen.getByText(/100€/i)
        expect(priceElement).toBeInTheDocument()
        expect(priceElement).toHaveTextContent('100€')
    })

    describe('discounted price', () => {
        it('renders the discounted price when discount is greater than 0', () => {
            render(<ClothingCard description="Test description" basePrice={100} discount={20} moreColors={false} />)
            const priceElement = screen.getByText(/80.00€/i)
            expect(priceElement).toBeInTheDocument()
            expect(priceElement).toHaveTextContent('80.00€')
        })

        it.skip('does not render the discounted price when discount is 0', () => {
            render(<ClothingCard description="Test description" basePrice={100} discount={0} moreColors={false} />)
            const priceElement = screen.queryByText(/€/i)
            expect(priceElement).toBeNull()
        })
    })


    describe('more colors', () => {
        it('renders the more colors indicator when moreColors is true', () => {
            render(<ClothingCard description="Test description" basePrice={100} discount={0} moreColors={true} />)
            const moreColorsElement = screen.getByText('más colores')
            expect(moreColorsElement).toBeInTheDocument()
        })

        it('does not render the more colors indicator when moreColors is false', () => {
            render(<ClothingCard description="Test description" basePrice={100} discount={0} moreColors={false} />)
            const moreColorsElement = screen.queryByText('más colores')
            expect(moreColorsElement).toBeNull()
        })
    })
})
