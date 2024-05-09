import getClothingItems from './getClothingItems'
import clothingItemsMock from './clothingItemsMock.json'

describe('getClothingItems', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns all items when no query or priceOrder is provided', async () => {
    const result = await getClothingItems()
    expect(result).toEqual(clothingItemsMock)
  })

  it('filters items based on the query', async () => {
    const filteredItems = clothingItemsMock.filter(item => item.description.includes('seda'))
    const result = await getClothingItems({ query: 'seda' })
    expect(result).toEqual(filteredItems)
  })
})
