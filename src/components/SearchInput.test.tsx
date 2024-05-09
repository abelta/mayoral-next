import { render, screen, fireEvent } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('SearchInput', () => {
    it('renders with additional classes when className prop is provided', () => {
        render(<SearchInput className="extra-class" />)
        const searchInputElement = screen.getByTestId('search-input')
        expect(searchInputElement).toHaveClass('extra-class')
    })

    it.skip('calls onKeyUp when a key is released in the input', () => {
        const handleKeyUp = jest.fn()
        render(<SearchInput onKeyUp={handleKeyUp} />)
        const inputElement = screen.getByPlaceholderText('Buscar')
        fireEvent.keyUp(inputElement, { key: 'a', code: 'KeyA' })
        expect(handleKeyUp).toHaveBeenCalledWith('a')
    })
})
