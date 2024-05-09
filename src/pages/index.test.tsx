import { render, screen } from '@testing-library/react'
import ClothingItemType from '../types/ClothingItem'
import clothingItemsMock from '../api/clothingItemsMock.json'
import HomePage from './index'

describe('HomePage', () => {
    it('renders the SearchInput component', () => {
        render(<HomePage clothing={clothingItemsMock as ClothingItemType[]} />)
        const searchInput = screen.getByRole('textbox')
        expect(searchInput).toBeInTheDocument()
    })

    it('renders the OrderControl component', () => {
        render(<HomePage clothing={clothingItemsMock as ClothingItemType[]} />)
        const orderControl = screen.getByTestId('order-control')
        expect(orderControl).toBeInTheDocument()
    })

    it('renders the ClothingList component', () => {
        render(<HomePage clothing={clothingItemsMock as ClothingItemType[]} />)
        const clothingList = screen.getByTestId('clothing-list')
        expect(clothingList).toBeInTheDocument()
    })
})
