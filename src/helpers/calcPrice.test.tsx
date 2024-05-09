import calcPrice from './calcPrice'

describe('calcPrice', () => {
  it('calculates the correct price when a discount is applied', () => {
    const price = calcPrice(100, 20)
    expect(price).toBe(80)
  })

  it('returns the base price when no discount is applied', () => {
    const price = calcPrice(100)
    expect(price).toBe(100)
  })

  it('returns 0 when the base price is not provided', () => {
    const price = calcPrice()
    expect(price).toBe(0)
  })

  it('returns the correct price when the base price and discount are both 0', () => {
    const price = calcPrice(0, 0)
    expect(price).toBe(0)
  })
})
