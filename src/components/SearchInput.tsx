import classnames from 'classnames'
import { MagnifyingGlass } from 'icons'

const SearchInput = ({ className, onKeyUp }:{ className?: string, onKeyUp?: (val: string) => void }) => {
    return (
        <div
            data-testid="search-input"
            className={classnames('h-10 p-2 flex flex-row border border-gray-500 rounded-md', className)}
        >
            <MagnifyingGlass color="grey" className="w-8" />
            <input
                className="ml-2 text-gray-600 text-xl w-full outline-none"
                placeholder="Buscar"
                onKeyUp={onKeyUp && ((e: React.KeyboardEvent<HTMLInputElement>) => onKeyUp((e.target as HTMLInputElement).value))}
            />
        </div>
    )
}

export default SearchInput
