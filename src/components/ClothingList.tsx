import { ClothingCard } from 'components'
import { ClothingItem as ClothingItemType } from 'types'

const ClothingList = ({ clothing }:{ clothing: ClothingItemType[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {clothing.map((item) => (
                <ClothingCard key={item.id} {...item} />
            ))}
        </div>
    )
}

export default ClothingList
