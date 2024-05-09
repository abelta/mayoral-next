import { render, screen, fireEvent } from '@testing-library/react'
import OrderControl from './OrderControl'

describe('OrderControl', () => {
    it('calls onClickMinus when the minus button is clicked', () => {
        const handleClickMinus = jest.fn()
        render(<OrderControl onClickMinus={handleClickMinus} onClickPlus={() => {return false}} order={undefined}  />)
        const minusButton = screen.getAllByTestId('button-nav')[0]
        fireEvent.click(minusButton)
        expect(handleClickMinus).toHaveBeenCalledTimes(1)
    })

    it('calls onClickPlus when the plus button is clicked', () => {
        const handleClickPlus = jest.fn();
        render(<OrderControl onClickMinus={() => {return false}} onClickPlus={handleClickPlus} order={undefined} />)
        const plusButton = screen.getAllByTestId('button-nav')[1]
        fireEvent.click(plusButton)
        expect(handleClickPlus).toHaveBeenCalledTimes(1)
    })

    it('renders with additional classes when className prop is provided', () => {
        render(<OrderControl className="extra-class" onClickMinus={() => { return false }} onClickPlus={() => {return false}} order={undefined}  />)
        const orderControl = screen.getByTestId('order-control')
        expect(orderControl).toHaveClass('extra-class')
    })
})
