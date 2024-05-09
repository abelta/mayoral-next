import classnames from 'classnames'
import { Button, ImageMock } from 'components'
import { calcPrice } from 'helpers'

const ClothingCard = (
    { description, basePrice, discount, moreColors, className }:
    { description: string; basePrice: number; discount: number; moreColors: boolean; className?: string }
) => {
    const price = calcPrice(basePrice, discount)

    return (
        <article
            data-testid="clothing-card"
            className={
                classnames(
                    'h-96 border-blue-300 border-2 rounded p-2 flex flex-col items-center hover:bg-yellow-100',
                    className,
                )}
        >
            <ImageMock className="w-full" />
            <p className="w-full my-4 overflow-hidden overflow-ellipsis text-center whitespace-nowrap text-gray-600">
                {description}
            </p>
            <p className={classnames('text-gray-600', { 'line-through': discount > 0 })}>
                {basePrice}€
            </p>
            {discount > 0 && <p className="text-red-500">{price.toFixed(2)}€ (-{discount}%)</p>}
            <div className="mt-auto">
                {moreColors && (
                    <p className="text-gray-600 mb-2 cursor-pointer">más colores</p>
                )}
                <Button className="">Añadir</Button>
            </div>
        </article>
    )
}

export default ClothingCard
