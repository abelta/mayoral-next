import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import classnames from 'classnames'
import getClothingItems from '../api/getClothingItems'
import ClothingList from '../components/ClothingList'
import OrderControl from '../components/OrderControl'
import SearchInput from '../components/SearchInput'
import ClothingItemType from '../types/ClothingItem'

const HomePage: NextPage = ({ clothing }: { clothing: ClothingItemType[] }) => {
  const [clothingItems, setClothingItems] = useState<ClothingItemType[]>(clothing)
  const [query, setQuery] = useState('')
  const [priceOrder, setPriceOrder] = useState<'asc' | 'desc'>(undefined)
  const [isLoading, setLoading] = useState(false)

  useEffect(
    () => {
      setLoading(true)
      const doGetClothingItems = async () => {
        const result = await getClothingItems({ query, priceOrder })
        setClothingItems(result)
        setLoading(false)
      }
      doGetClothingItems()
    },
    [query, priceOrder],
  )

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row h-24 mb-8 lg:h-auto justify-between items-center">
        <SearchInput
          className="w-full lg:w-3/6"
          onKeyUp={val => setQuery(val)}
        />
        <OrderControl
          order={priceOrder}
          onClickPlus={() => {
            if (priceOrder === undefined) { setPriceOrder('asc') }
            if (priceOrder === 'desc') { setPriceOrder('asc') }
            if (priceOrder === 'asc') { setPriceOrder(undefined) }
          }}
          onClickMinus={() => {
            if (priceOrder === undefined) { setPriceOrder('desc') }
            if (priceOrder === 'asc') { setPriceOrder('desc') }
            if (priceOrder === 'desc') { setPriceOrder(undefined) }
          }}
        />
      </div>
      <div className={classnames({ 'opacity-50': isLoading })}>
        <ClothingList clothing={clothingItems} />
      </div>
    </>
  )
}

const getStaticProps = async () => {
  const clothing = await getClothingItems()
  return {
    props: {
      clothing
    }
  }
}

export { getStaticProps }
export default HomePage
