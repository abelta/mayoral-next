import { render, screen } from '@testing-library/react'
import ClothingList from './ClothingList'

describe('ClothingList component', () => {
    it('renders the correct number of ClothingCard components', () => {
        const clothing = [
        { id: 1, description: 'Test description 1', basePrice: 100, discount: 0, moreColors: false },
        { id: 2, description: 'Test description 2', basePrice: 200, discount: 20, moreColors: true },
        ]
        render(<ClothingList clothing={clothing} />)
        const clothingCards = screen.getAllByTestId('clothing-card')
        expect(clothingCards).toHaveLength(clothing.length)
    })

    it('renders no ClothingCard components when clothing is an empty array', () => {
        render(<ClothingList clothing={[]} />)
        const clothingCards = screen.queryAllByTestId('clothing-card')
        expect(clothingCards).toHaveLength(0)
    })
})
