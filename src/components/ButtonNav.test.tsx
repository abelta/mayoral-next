import { render, screen, fireEvent } from '@testing-library/react'
import ButtonNav from './ButtonNav'

describe('ButtonNav component', () => {
    it('renders the children', () => {
        render(<ButtonNav>Click me</ButtonNav>);
        const button = screen.getByTestId('button-nav')
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Click me')
    })

    it('calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        render(<ButtonNav onClick={handleClick}>Click me</ButtonNav>)
        const button = screen.getByTestId('button-nav')
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    describe('active', () => {
        it('has correct opacity when active', () => {
            const { rerender } = render(<ButtonNav active={true}>Click me</ButtonNav>);
            let button = screen.getByTestId('button-nav');
            expect(button).toHaveClass('opacity-100');
            expect(button).not.toHaveClass('opacity-50');

            rerender(<ButtonNav active={false}>Click me</ButtonNav>);
            button = screen.getByTestId('button-nav');
            expect(button).toHaveClass('opacity-50');
            expect(button).not.toHaveClass('opacity-100');
        })
    })
});
