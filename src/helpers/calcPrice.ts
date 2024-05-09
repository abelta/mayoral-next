const calcPrice = (basePrice = 0, discount = 0) => basePrice - (basePrice * discount / 100)

export default calcPrice
