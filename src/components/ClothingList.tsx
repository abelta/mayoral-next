import ClothingCard from './ClothingCard'
import ClothingItemType from '../types/ClothingItem'

const ClothingList = ({ clothing }:{ clothing: ClothingItemType[] }) => {
    return (
        <div
            data-testid="clothing-list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
            {clothing.map((item) => (
                <ClothingCard key={item.id} {...item} />
            ))}
        </div>
    )
}

export default ClothingList
