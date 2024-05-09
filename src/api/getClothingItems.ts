import ClothingItem from '../types/ClothingItem'
import calcPrice from '../helpers/calcPrice'
import items from './clothingItemsMock.json'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const getClothingItems = async (
    { query, priceOrder }:
    { query?: string, priceOrder?: 'asc' | 'desc' } = {}
) => {
    let result = items as ClothingItem[]

    // Filter items if query is provided
    if (query) {
        result = result.filter(item => item.description.toLowerCase().includes(query.toLowerCase()));
    }

    // Sort items by calculated price if priceOrder is provided
    if (priceOrder) {
        if (priceOrder === 'desc') {
            result = result.sort((a, b) =>
                calcPrice(a.basePrice, a.discount) - calcPrice(b.basePrice, b.discount)
            )
        }
        if (priceOrder === 'asc') {
            result = result.sort(
                (a, b) => calcPrice(b.basePrice, b.discount) - calcPrice(a.basePrice, a.discount)
            )
        }
    }

    await delay(1000)
    return result
}

export default getClothingItems
